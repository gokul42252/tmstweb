import { createClient } from "@supabase/supabase-js";

export const SUPABASE_URL = "https://bbskmcedlhvntjqndcqh.supabase.co";
export const SUPABASE_ANON_KEY = "sb_publishable_nXRAAmcu5J4T0AmoGJc_HA_oukr2m19";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export interface StaffUser {
  id: string;
  username: string;
  password_hash: string;
  full_name: string;
  role: "ADMIN" | "OPERATOR" | "AUDITOR";
  is_active: boolean;
  created_at?: string;
  synced_at?: string;
}

export interface BillItem {
  id: string;
  bill_id: string;
  pooja_id: string;
  pooja_name: string;
  deity_name: string;
  quantity: number;
  unit_price: number;
  subtotal: number;
}

export interface Bill {
  id: string;
  bill_number: string;
  counter_id: string;
  billed_by?: string;
  devotee_name: string;
  star_name: string;
  gothram?: string;
  pooja_date: string;
  payment_mode: "CASH" | "UPI" | "CARD" | string;
  total_amount: number;
  created_at: string;
  sync_status?: string;
  synced_at?: string;
  bill_items?: BillItem[];
}

export interface Pooja {
  id: string;
  code: string;
  name_en: string;
  name_ml?: string;
  deity_name: string;
  price: number;
  is_active: boolean;
  updated_at?: string;
}

// Authentication helper: Verify credentials against staff_users in Supabase
export async function authenticateStaff(username: string, passwordInput: string): Promise<{ success: boolean; user?: StaffUser; error?: string }> {
  try {
    const cleanUsername = username.trim().toLowerCase();
    const { data, error } = await supabase
      .from("staff_users")
      .select("*")
      .eq("username", cleanUsername)
      .eq("is_active", true)
      .limit(1);

    if (error) {
      console.error("Supabase auth query error:", error);
      return { success: false, error: "Database authentication connection failed: " + error.message };
    }

    if (!data || data.length === 0) {
      return { success: false, error: "Invalid username or inactive staff account." };
    }

    const user = data[0] as StaffUser;

    // Check plain text match or SHA-256 match
    let passwordMatched = false;
    if (user.password_hash === passwordInput) {
      passwordMatched = true;
    } else {
      // Calculate SHA256 of passwordInput in browser/Node
      if (typeof crypto !== "undefined" && crypto.subtle) {
        const msgBuffer = new TextEncoder().encode(passwordInput);
        const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
        if (user.password_hash.toLowerCase() === hashHex.toLowerCase()) {
          passwordMatched = true;
        }
      }
    }

    if (!passwordMatched) {
      return { success: false, error: "Incorrect password. Please verify your credentials." };
    }

    return { success: true, user };
  } catch (err: any) {
    console.error("Authentication error:", err);
    return { success: false, error: err?.message || "An unexpected error occurred during login." };
  }
}

// ============================================================================
// POOJAS CRUD OPERATIONS
// ============================================================================

export async function fetchPoojas(activeOnly: boolean = false): Promise<{ success: boolean; data?: Pooja[]; error?: string }> {
  try {
    let query = supabase.from("poojas").select("*").order("code", { ascending: true });
    if (activeOnly) {
      query = query.eq("is_active", true);
    }
    const { data, error } = await query;
    if (error) throw error;
    return { success: true, data: (data as Pooja[]) || [] };
  } catch (err: any) {
    console.error("fetchPoojas error:", err);
    return { success: false, error: err?.message || "Failed to fetch poojas from database." };
  }
}

export async function createPooja(newPooja: {
  code: string;
  name_en: string;
  name_ml?: string;
  deity_name: string;
  price: number;
  is_active?: boolean;
}): Promise<{ success: boolean; data?: Pooja; error?: string }> {
  try {
    const payload = {
      id: crypto.randomUUID(),
      code: newPooja.code.trim(),
      name_en: newPooja.name_en.trim(),
      name_ml: newPooja.name_ml?.trim() || null,
      deity_name: newPooja.deity_name.trim(),
      price: Number(newPooja.price),
      is_active: newPooja.is_active !== undefined ? newPooja.is_active : true,
      updated_at: new Date().toISOString(),
    };

    const { data, error } = await supabase.from("poojas").insert([payload]).select();
    if (error) throw error;
    return { success: true, data: data?.[0] as Pooja };
  } catch (err: any) {
    console.error("createPooja error:", err);
    return { success: false, error: err?.message || "Failed to add pooja to database." };
  }
}

export async function updatePooja(
  id: string,
  updates: Partial<Pooja>
): Promise<{ success: boolean; data?: Pooja; error?: string }> {
  try {
    const payload: any = { ...updates, updated_at: new Date().toISOString() };
    delete payload.id; // Primary key must remain immutable

    const { data, error } = await supabase.from("poojas").update(payload).eq("id", id).select();
    if (error) throw error;
    return { success: true, data: data?.[0] as Pooja };
  } catch (err: any) {
    console.error("updatePooja error:", err);
    return { success: false, error: err?.message || "Failed to update pooja." };
  }
}

export async function deletePooja(id: string, permanent: boolean = false): Promise<{ success: boolean; error?: string }> {
  try {
    if (permanent) {
      const { error } = await supabase.from("poojas").delete().eq("id", id);
      if (error) throw error;
    } else {
      const { error } = await supabase.from("poojas").update({ is_active: false, updated_at: new Date().toISOString() }).eq("id", id);
      if (error) throw error;
    }
    return { success: true };
  } catch (err: any) {
    console.error("deletePooja error:", err);
    return { success: false, error: err?.message || "Failed to remove pooja." };
  }
}

