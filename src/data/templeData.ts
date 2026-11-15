// Comprehensive Authentic Data for Thirumarady Sri Mahadeva Temple

export interface PoojaTiming {
  name: string;
  malayalam: string;
  time: string;
  description: string;
  significance: string;
  malayalamDesc: string;
  malayalamSignificance: string;
}

export interface SpecialTiming {
  occasion: string;
  malayalamOccasion: string;
  timingChange: string;
  malayalamTimingChange: string;
  specialRituals: string;
  malayalamSpecialRituals: string;
}

export interface VazhipaduItem {
  id: string;
  deity: "shiva" | "ganapathy" | "ayyappan" | "subrahmanian" | "serpent";
  deityName: string;
  name: string;
  malayalam: string;
  rate: number;
  description: string;
  significance: string;
  malayalamDesc: string;
  malayalamSignificance: string;
  popular?: boolean;
}

export interface FestivalEvent {
  title: string;
  malayalam: string;
  season: string;
  duration: string;
  description: string;
  highlights: string[];
}

export const TEMPLE_INFO = {
  name: "Thirumarady Sri Mahadeva Temple",
  malayalamName: "തിരുമാറാടി ശ്രീ മഹാദേവ ക്ഷേത്രം",
  presidingDeity: "Lord Shiva (East-Facing Jyotirlinga / Mahadeva)",
  devaswom: "Thirumarady Temple Managing Committee (തിരുമാറാടി ക്ഷേത്ര ഭരണ സമിതി)",
  governanceYear: 1965,
  thanthri: "Kidangassery Illam (കിടങ്ങശ്ശേരി ഇല്ലം)",
  hereditaryIllams: [
    "Kattampilly Illam (കാട്ടാമ്പിള്ളി)",
    "Kizhekkillam (കിഴക്കില്ലം)",
    "Edayattuppilly Illam (എടയാറ്റുപ്പിള്ളി)",
    "Kanjirappilly Illam (കാഞ്ഞിരപ്പള്ളി)"
  ],
  adjacentKavu: "Edaprakavu (എടപ്രക്കാവ്)",
  address: {
    line1: "Piravom – Koothattukulam Road",
    locality: "Thirumarady Panchayath",
    taluk: "Muvattupuzha",
    district: "Ernakulam",
    state: "Kerala",
    pincode: "686662"
  },
  phone: "0485-2877300",
  email: "devaswom@thirumaradytemple.org",
  darshanTimings: {
    morning: "05:00 AM – 10:30 AM",
    evening: "05:00 PM – 08:00 PM"
  }
};

export const DARSHAN_SCHEDULE: { morning: PoojaTiming[]; evening: PoojaTiming[] } = {
  morning: [
    {
      name: "Palliyunarthal & Nada Thurakkal",
      malayalam: "പള്ളിയുണർത്തൽ & നടതുറക്കൽ",
      time: "05:00 AM",
      description: "Opening of the sacred sanctum sanctorum doors accompanied by the resonance of temple bells.",
      significance: "Awakening of the divine energy; devotees receive the auspicious Nirmalyam darshan.",
      malayalamDesc: "ക്ഷേത്രമണികളുടെ നാദത്തോടും ശംഖുവിളിയോടും കൂടി ശ്രീകോവിൽ നട തുറന്ന് ഭഗവാനെ പള്ളിയുണർത്തുന്നു.",
      malayalamSignificance: "പ്രഭാതത്തിലെ ദിവ്യ ചൈതന്യ പ്രാപ്തി; നിർമ്മാല്യ ദർശനത്തിലൂടെ സർവ്വ ഐശ്വര്യങ്ങളും കൈവരുന്നു."
    },
    {
      name: "Nirmalya Darshanam & Abhishekam",
      malayalam: "നിർമ്മാല്യ ദർശനം & അഭിഷേകം",
      time: "05:15 AM – 05:45 AM",
      description: "Viewing the Lord adorned in previous evening's sandalwood paste and flowers, followed by holy Jaladhara and Sankhabhishekam.",
      significance: "Considered the most sacred darshan of the day; washing away all sins and negative karma.",
      malayalamDesc: "തലേദിവസത്തെ ചന്ദനക്കാപ്പും പുഷ്പങ്ങളും അണിഞ്ഞുനിൽക്കുന്ന ഭഗവാന്റെ നിർമ്മാല്യരൂപം തൊഴൽ, തുടർന്ന് പവിത്രമായ ജലധാരയും ശംഖാഭിഷേകവും.",
      malayalamSignificance: "ഒരു ദിവസത്തെ ഏറ്റവും ശ്രേഷ്ഠമായ പുണ്യ ദർശനം; സകല പാപനാശവും മനഃശാന്തിയും ഫലം."
    },
    {
      name: "Usha Pooja & Nivedyam",
      malayalam: "ഉഷഃപൂജ & നിവേദ്യം",
      time: "06:15 AM – 06:45 AM",
      description: "Morning Vedic pooja offered with fresh blossoms, sacred bilva leaves, and sweet morning nivedyam.",
      significance: "Bestows divine grace, clarity of mind, and vibrant health for the day ahead.",
      malayalamDesc: "സൂര്യോദയവേളയിൽ കൂവളമാലകളും മലർ നിവേദ്യവും സമർപ്പിച്ച് വേദമന്ത്രോച്ചാരണങ്ങളോടെ നടത്തുന്ന പ്രഭാത പൂജ.",
      malayalamSignificance: "ദിവ്യാനുഗ്രഹവും കർമ്മവിജയവും ബുദ്ധിശക്തിയും ആയുരാരോഗ്യ സൗഖ്യവും പ്രദാനം ചെയ്യുന്നു."
    },
    {
      name: "Pantheeradi Pooja",
      malayalam: "പന്തീരടി പൂജ",
      time: "07:30 AM – 08:15 AM",
      description: "Traditional mid-morning ritual measured by the length of the sun's shadow (12 feet/pantheeradi).",
      significance: "Invoking planetary harmony and prosperity for families and devotees.",
      malayalamDesc: "സൂര്യന്റെ നിഴലിന് പന്ത്രണ്ടടി നീളമുള്ള വേളയിൽ അതീവ തന്ത്രിക നിഷ്ഠയോടെ മഹാദേവന് സമർപ്പിക്കുന്ന സവിശേഷ പൂജ.",
      malayalamSignificance: "സമസ്ത ഗ്രഹദോഷശാന്തി, കുടുംബൈശ്വര്യം, രോഗപീഡകളിൽ നിന്നുള്ള ആശ്വാസം."
    },
    {
      name: "Ucha Pooja & Deeparadhana",
      malayalam: "ഉച്ചപ്പൂജ & ദീപാരാധന",
      time: "09:45 AM – 10:15 AM",
      description: "Grand noon pooja accompanied by noon nivedyam (vella nivedyam / payasam) and noon deeparadhana.",
      significance: "Peak noon worship representing total sustenance, spiritual nourishment, and fulfillment.",
      malayalamDesc: "വെള്ള നിവേദ്യവും കൂട്ടുപായസവും സമർപ്പിച്ച് വാദ്യമേളങ്ങളോടെ നടത്തുന്ന പ്രൗഢഗംഭീരമായ ഉച്ചപൂജയും ഉച്ചദീപാരാധനയും.",
      malayalamSignificance: "സർവ്വകാര്യസിദ്ധി, അന്നദാതാവായ ഈശ്വരന്റെ കൃപാകടാക്ഷം, ആത്മസംതൃപ്തിയും സമൃദ്ധിയും."
    },
    {
      name: "Nada Adaikkal (Morning Closing)",
      malayalam: "രാവിലെ നടയടയ്ക്കൽ",
      time: "10:30 AM",
      description: "Closing of the Sreekovil doors for the noon resting period.",
      significance: "Consecration of the morning vibrations inside the sanctum.",
      malayalamDesc: "ഉച്ചപ്പൂജയ്ക്കും ഭക്തജന ദർശനത്തിനും ശേഷം ഉച്ചവിശ്രമത്തിനായി ശ്രീകോവിൽ നട അടയ്ക്കുന്നു.",
      malayalamSignificance: "പ്രഭാത പൂജകളിലൂടെ ശ്രീകോവിലിൽ സംജാതമായ അതീവ ദിവ്യചൈതന്യത്തിന്റെ സംരക്ഷണം."
    }
  ],
  evening: [
    {
      name: "Nada Thurakkal (Evening Opening)",
      malayalam: "വൈകിട്ട് നടതുറക്കൽ",
      time: "05:00 PM",
      description: "Opening of the temple for evening worship and pradakshinam as dusk approaches.",
      significance: "Welcoming devotees for evening prayers and lamps.",
      malayalamDesc: "സന്ധ്യാവന്ദനത്തിനും പ്രദക്ഷിണ ദർശനത്തിനുമായി വൈകുന്നേരം ശ്രീകോവിൽ നട തുറക്കുന്നു.",
      malayalamSignificance: "സന്ധ്യാസമയത്തെ വിശുദ്ധ പ്രാർത്ഥനകൾക്കായി ഭക്തജനങ്ങൾക്ക് ഭഗവത്സന്നിധി ഒരുങ്ങുന്നു."
    },
    {
      name: "Deeparadhana (Sandhya Pooja)",
      malayalam: "ദീപാരാധന (സന്ധ്യാ ദീപാരാധന)",
      time: "06:30 PM – 07:00 PM",
      description: "Grand illumination of thousands of bronze oil lamps, accompanied by percussion, temple conch, and bells.",
      significance: "Magnificent visual darshan removing ignorance and bestowing boundless inner luminescence.",
      malayalamDesc: "ശ്രീകോവിലിനുള്ളിലും ചുറ്റുവിളക്കുകളിലും ദീപങ്ങൾ കൊളുത്തി, ശംഖനാദവും മണിനാദവും പഞ്ചവാദ്യവുമകമ്പടിയോടെ നടത്തുന്ന മഹാദീപാരാധന.",
      malayalamSignificance: "അജ്ഞതയും അന്ധകാരവും നീക്കി അന്തരംഗത്തിൽ ആത്മീയ ജ്ഞാനം നിറയ്ക്കുന്ന പരമോന്നത ദർശനം."
    },
    {
      name: "Athazha Pooja & Nivedyam",
      malayalam: "അത്താഴപ്പൂജ & നിവേദ്യം",
      time: "07:30 PM – 07:45 PM",
      description: "Night Vedic worship and final nivedyam offering of sweet appam and payasam to the Lord.",
      significance: "Seeking peaceful rest, nocturnal protection, and warding off anxiety and distress.",
      malayalamDesc: "രാത്രിയിലെ അവസാന പൂജ; അപ്പം, അട, പാൽപ്പായസം എന്നിവ നിവേദിച്ച് വേദസൂക്തങ്ങളോടെ സമർപ്പിക്കുന്നു.",
      malayalamSignificance: "ഭയവും ഉത്കണ്ഠകളും അകറ്റി ശാന്തമായ നിദ്രയും കുടുംബ സംരക്ഷണവും മനശ്ശാന്തിയും നൽകുന്നു."
    },
    {
      name: "Thrikkuka & Nada Adaikkal",
      malayalam: "തൃപ്പുക & രാത്രി നടയടയ്ക്കൽ",
      time: "08:00 PM",
      description: "Offering of divine herbal frankincense (Thrikkuka) throughout the Nalambalam followed by closing.",
      significance: "Purifying the sacred atmosphere and sealing the day's prayers.",
      malayalamDesc: "അഷ്ടഗന്ധവും കർപ്പൂരവും സുഗന്ധധൂപവും കൊണ്ടുളള അതിപവിത്രമായ തൃപ്പുക പുകച്ച് ശ്രീകോവിൽ നട അടയ്ക്കുന്നു.",
      malayalamSignificance: "ക്ഷേത്രാന്തരീക്ഷത്തെ വിശുദ്ധീകരിക്കുകയും ഭക്തരുടെ പ്രാർത്ഥനകൾക്ക് ഭഗവാന്റെ സംരക്ഷണ കവചമേകുകയും ചെയ്യുന്നു."
    }
  ]
};

export const SPECIAL_TIMINGS: SpecialTiming[] = [
  {
    occasion: "Monthly Pradosham (പ്രദോഷ വ്രതം)",
    malayalamOccasion: "പ്രദോഷ വ്രതം (മാസന്തോറും)",
    timingChange: "Evening poojas extend until 08:30 PM",
    malayalamTimingChange: "വൈകുന്നേരത്തെ പൂജകൾ രാത്രി 08:30 വരെ നീളുന്നു",
    specialRituals: "Special Pradosha Sandhya Abhishekam, Rudra Dhara, Bilva Patra Archana, and Pradosha Pradakshinam.",
    malayalamSpecialRituals: "പ്രത്യേക പ്രദോഷ സന്ധ്യാ അഭിഷേകം, രുദ്രധാര, കൂവളമാല അർച്ചന, പ്രദോഷ പ്രദക്ഷിണം."
  },
  {
    occasion: "Mondays (സോമവാരം)",
    malayalamOccasion: "സോമവാരം (തിങ്കളാഴ്ചകൾ)",
    timingChange: "Morning Dhara rituals begin at 05:00 AM continuously",
    malayalamTimingChange: "രാവിലെ 05:00 മുതൽ തുടർച്ചയായി ധാര വഴിപാടുകൾ നടക്കുന്നു",
    specialRituals: "Special Somavara Dhara, Ksheeradhara (Milk Dhara), and Mrityunjaya Pushpanjali.",
    malayalamSpecialRituals: "പ്രത്യേക സോമവാര ധാര, ക്ഷീരധാര, മൃത്യുഞ്ജയ പുഷ്പാഞ്ജലി."
  },
  {
    occasion: "Maha Shivaratri (മഹാ ശിവരാത്രി)",
    malayalamOccasion: "മഹാ ശിവരാത്രി",
    timingChange: "Temple remains OPEN ALL NIGHT (Akhanda Darshanam)",
    malayalamTimingChange: "രാത്രി മുഴുവൻ ക്ഷേത്രനട തുറന്ന് അഖണ്ഡ ദർശനം",
    specialRituals: "Four continuous Yama Poojas throughout the night, continuous Abhishekam, Laksharchana, and Shivaratri Vilakku.",
    malayalamSpecialRituals: "രാത്രിയിലെ നാല് യാമപൂജകൾ, നിരന്തര അഭിഷേകം, ലക്ഷാർച്ചന, ശിവരാത്രി വിളക്ക്."
  },
  {
    occasion: "8-Day Annual Dhanu Utsavam (വാർഷിക ഉത്സവം)",
    malayalamOccasion: "8 ദിവസത്തെ വാർഷിക ധനു തിരുവാതിര ഉത്സവം",
    timingChange: "Special continuous festival schedule with Utsavabali & Melam",
    malayalamTimingChange: "ഉത്സവബലിയും മേളങ്ങളും അടങ്ങിയ പ്രത്യേക പൂജാക്രമം",
    specialRituals: "Kodiyettam, daily Elephant Ezhunnallippu, Panchavadyam, Thayambaka, Pallivetta, and Thiruvathira Arattu.",
    malayalamSpecialRituals: "കൊടിയേറ്റ്, ആനയെഴുന്നള്ളിപ്പ്, പഞ്ചവാദ്യം, തായമ്പക, പള്ളിവേട്ട, തിരുവാതിര ആറാട്ട്."
  },
  {
    occasion: "Mandala Season (മണ്ഡല-മകരവിളക്ക് കാലം)",
    malayalamOccasion: "മണ്ഡല-മകരവിളക്ക് കാലം",
    timingChange: "Morning: 04:30 AM – 11:00 AM; Evening: 04:30 PM – 08:30 PM",
    malayalamTimingChange: "രാവിലെ: 04:30 AM – 11:00 AM; വൈകിട്ട്: 04:30 PM – 08:30 PM",
    specialRituals: "Special Ayyappa Pooja, Neeranjanam, and Kettunira facilities for Sabarimala pilgrims.",
    malayalamSpecialRituals: "പ്രത്യേക ശാസ്താപൂജ, നീരാജനം, ശബരിമല തീർത്ഥാടകർക്കായി കെട്ടുനിറ സൗകര്യം."
  }
];

export const VAZHIPADU_OFFERINGS: VazhipaduItem[] = [
  // Lord Shiva Offerings
  {
    id: "jaladhara",
    deity: "shiva",
    deityName: "Lord Shiva (മഹാദേവൻ)",
    name: "Jaladhara (Holy Water Shower)",
    malayalam: "ജലധാര",
    rate: 50,
    description: "Continuous cooling shower of consecrated water through a perforated copper vessel onto the Shiva Lingam.",
    significance: "Cooling the fire of Lord Shiva's third eye; relieves physical ailments, fever, mental anxiety, and brings inner peace.",
    malayalamDesc: "ശിവലിംഗത്തിന് മുകളിലായി തൂക്കിയ പ്രത്യേക താമ്രപാത്രത്തിലൂടെ പുണ്യതീർത്ഥം നിരന്തരമായി വർഷിക്കുന്ന പരമപവിത്രമായ ധാര വഴിപാട്.",
    malayalamSignificance: "ഭഗവാന്റെ തൃക്കണ്ണിലെ ഉഗ്രത ശമിപ്പിച്ച് ശാന്തതയേകുന്നു; ഉഷ്ണരോഗങ്ങൾ, ജ്വരം, മനഃക്ലേശങ്ങൾ എന്നിവ അകറ്റി ആത്മശാന്തിയും ആയുരാരോഗ്യവും പ്രധാനം ചെയ്യുന്നു.",
    popular: true
  },
  {
    id: "ksheeradhara",
    deity: "shiva",
    deityName: "Lord Shiva (മഹാദേവൻ)",
    name: "Ksheeradhara (Milk Shower)",
    malayalam: "ക്ഷീരധാര",
    rate: 150,
    description: "Abhishekam with pure fresh cow's milk cascading steadily over the Sivalingam.",
    significance: "Brings radiant vitality, nourishment, health, and liberation from long-standing illnesses.",
    malayalamDesc: "ഭക്തിനിർഭരമായ വേദമന്ത്രോച്ചാരണങ്ങളോടെ ശുദ്ധമായ നാടൻ പശുവിൻപാൽ ശിവലിംഗത്തിന്മേൽ തുടർച്ചയായി അഭിഷേകം ചെയ്യുന്നു.",
    malayalamSignificance: "ദീർഘകാല രോഗങ്ങളിൽ നിന്നുള്ള മോചനം, ശരീരത്തിന് ഓജസ്സും ആയുസ്സും വർദ്ധനവ്, കുടുംബത്തിൽ സമാധാനവും സന്തുഷ്ടിയും ഫലം.",
    popular: true
  },
  {
    id: "neyyabhishekam",
    deity: "shiva",
    deityName: "Lord Shiva (മഹാദേവൻ)",
    name: "Neyyabhishekam (Pure Ghee Bath)",
    malayalam: "നെയ്യഭിഷേകം",
    rate: 200,
    description: "Sacred anointing of the Shivalinga with pure organic cow ghee.",
    significance: "Bestows mental clarity, wisdom, spiritual elevation, and divine protection against negative energies.",
    malayalamDesc: "ശുദ്ധമായ പശുവിൻ നെയ്യ് ഉപയോഗിച്ച് മഹാദേവന്റെ തിരുമേനിയിൽ അതീവ ഭക്തിയോടെ സമർപ്പിക്കുന്ന ദിവ്യാഭിഷേകം.",
    malayalamSignificance: "ബുദ്ധിശക്തി, ഓർമ്മശക്തി, ആത്മീയ ഉണർവ് എന്നിവ ലഭിക്കുന്നതിനും ദൃഷ്ടിദോഷങ്ങളും ശത്രുദോഷങ്ങളും അകലുന്നതിനും ഉത്തമം."
  },
  {
    id: "mrityunjaya-homam",
    deity: "shiva",
    deityName: "Lord Shiva (മഹാദേവൻ)",
    name: "Maha Mrityunjaya Homam",
    malayalam: "മൃത്യുഞ്ജയ ഹോമം",
    rate: 500,
    description: "Supreme Vedic fire oblation chanting the 136-word Maha Mrityunjaya mantra with sacred Amrita herbs.",
    significance: "The foremost ritual to avert premature death, severe illness, accidents, and promote longevity and sound health.",
    malayalamDesc: "അമൃതവള്ളിയും വിശിഷ്ട ഔഷധക്കൂട്ടുകളും അഷ്ടദ്രവ്യങ്ങളും ചേർത്ത് 136 പദങ്ങളുള്ള ദിവ്യ മഹാമൃത്യുഞ്ജയ മന്ത്രം ഉരുക്കഴിച്ച് അഗ്നിയിൽ സമർപ്പിക്കുന്ന പരമോന്നത വൈദിക ഹോമം.",
    malayalamSignificance: "അകാലമൃത്യുഭയം, മാറാരോഗങ്ങൾ, വാഹനാപകടങ്ങൾ എന്നിവയിൽ നിന്ന് ഭഗവാന്റെ അഭയകവചം; ദീർഘായുസ്സും പൂർണ്ണാരോഗ്യവും ദിവ്യ സംരക്ഷണവും ഫലം.",
    popular: true
  },
  {
    id: "swayamvara-pushpanjali",
    deity: "shiva",
    deityName: "Lord Shiva (മഹാദേവൻ)",
    name: "Swayamvara Pushpanjali",
    malayalam: "സ്വയംവര പുഷ്പാഞ്ജലി",
    rate: 100,
    description: "Special floral archana chanting sacred Swayamvara mantras invoking Lord Shiva and Goddess Parvathi.",
    significance: "Blesses unmarried devotees with virtuous life partners, eliminates doshas delaying marriage, and nurtures marital bliss.",
    malayalamDesc: "ശിവപാർവ്വതീ പ്രീതിക്കായി അതീവ ദിവ്യമായ സ്വയംവര മന്ത്രങ്ങൾ ജപിച്ച് മേൽശാന്തി സമർപ്പിക്കുന്ന വിശേഷാൽ പുഷ്പാർച്ചന.",
    malayalamSignificance: "വിവാഹതടസ്സങ്ങൾ മാറി ഉത്തമ ജീവിതപങ്കാളിയെ ലഭിക്കുന്നതിനും, ദാമ്പത്യസൗഖ്യത്തിനും കുടുംബ ഭദ്രതയ്ക്കും അതിശ്രേഷ്ഠം.",
    popular: true
  },
  {
    id: "mrityunjaya-pushpanjali",
    deity: "shiva",
    deityName: "Lord Shiva (മഹാദേവൻ)",
    name: "Mrityunjaya Pushpanjali",
    malayalam: "മൃത്യുഞ്ജയ പുഷ്പാഞ്ജലി",
    rate: 60,
    description: "Sacred floral offering with Bilva leaves reciting Mrityunjaya stotras.",
    significance: "Ensures vitality, fearlessness, cure for chronic ailments, and removal of planetary doshas.",
    malayalamDesc: "മൃത്യുഞ്ജയ മന്ത്രങ്ങൾ ജപിച്ച് ഭഗവാന് പ്രിയങ്കരമായ പച്ചക്കൂവളത്തിലകളും സുഗന്ധപുഷ്പങ്ങളും സമർപ്പിച്ച് നടത്തുന്ന അർച്ചന.",
    malayalamSignificance: "രോഗശാന്തി, ഭയനിവാരണം, മാനസിക ധൈര്യം, ബാലാരിഷ്ടതകളിൽ നിന്നും ഗ്രഹപ്പിഴകളിൽ നിന്നുമുള്ള മുക്തി ഫലം."
  },
  {
    id: "koottu-payasam",
    deity: "shiva",
    deityName: "Lord Shiva (മഹാദേവൻ)",
    name: "Koottu Payasam (Traditional Sweet Pudding)",
    malayalam: "കൂട്ടുപായസം",
    rate: 120,
    description: "Delectable Kerala temple dessert cooked with red unpolished rice, raw jaggery, pure ghee, dried ginger, and cardamom.",
    significance: "Special nivedyam to satisfy Lord Shiva, bringing family prosperity and happiness.",
    malayalamDesc: "കുത്തരി, ശുദ്ധമായ നാടൻ ശർക്കര, പശുവിൻ നെയ്യ്, ചുക്ക്, ഏലയ്ക്ക, കൊപ്രക്കൊത്ത് എന്നിവ ചേർത്ത് ഉരുളിയിൽ തയ്യാറാക്കുന്ന പരമ്പരാഗത വിശിഷ്ട നിവേദ്യം.",
    malayalamSignificance: "മഹാദേവന്റെ പരമപ്രീതി, കുടുംബത്തിൽ ധനധാന്യ സമൃദ്ധിയും സന്തോഷവും സമാധാനവും കളിയാടുന്നു."
  },
  {
    id: "chuttu-vilakku",
    deity: "shiva",
    deityName: "Lord Shiva (മഹാദേവൻ)",
    name: "Chuttuvilakku & Niramala",
    malayalam: "ചുറ്റുവിളക്കും നിറമാലയും",
    rate: 1500,
    description: "Lighting hundreds of brass oil lamps surrounding the entire Nalambalam, accompanied by fresh jasmine and marigold garlands.",
    significance: "Dispels the darkest sorrows, illuminates ancestral lineage, and invites immense divine fortune.",
    malayalamDesc: "നാലമ്പലത്തിന് ചുറ്റുമുള്ള ആയിരക്കണക്കിന് ഓട്ടുവിളക്കുകളിൽ നല്ലെണ്ണയൊഴിച്ച് തിരി തെളിയിക്കുകയും, ശ്രീകോവിലും നടപ്പന്തലും സുഗന്ധപുഷ്പമാലകളാൽ അലങ്കരിക്കുകയും ചെയ്യുന്ന മഹാസമർപ്പണം.",
    malayalamSignificance: "ജീവിതത്തിലെ കടുത്ത ദുരിതങ്ങളും അന്തകാരവും നീക്കി പ്രകാശം പരത്തുന്നു; പിതൃപുണ്യവും സകലവിധ സമ്പത്സമൃദ്ധിയും പ്രദാനം ചെയ്യുന്നു.",
    popular: true
  },
  {
    id: "rudrabhishekam",
    deity: "shiva",
    deityName: "Lord Shiva (മഹാദേവൻ)",
    name: "Rudrabhishekam with Panchamrutham",
    malayalam: "രുദ്രാഭിഷേകം",
    rate: 350,
    description: "Vedic recitation of Sri Rudram Chamakam during abhishekam with honey, curd, milk, ghee, and tender coconut water.",
    significance: "Destroys negative planetary effects, invokes cosmic peace, and fulfills righteous desires.",
    malayalamDesc: "ശ്രീരുദ്രം ചമകം എന്നീ വേദമന്ത്രങ്ങൾ ജപിച്ച് പഞ്ചാമൃതം, പാൽ, തൈര്, നെയ്യ്, തേൻ, കരിക്കിൻവെള്ളം എന്നിവയാൽ നടത്തുന്ന മഹാരുദ്രാഭിഷേകം.",
    malayalamSignificance: "സകല പാപങ്ങളുടെയും ശമനം, സമസ്ത ഗ്രഹദോഷ നിവാരണം, സർവ്വകാര്യസിദ്ധി, കുടുംബത്തിൽ ശാന്തിയും ഐശ്വര്യവും."
  },

  // Lord Ganapathy Offerings
  {
    id: "ganapathy-homam",
    deity: "ganapathy",
    deityName: "Lord Ganapathy (ഗണപതി)",
    name: "Ashtadravya Maha Ganapathy Homam",
    malayalam: "അഷ്ടദ്രവ്യ മഹാഗണപതി ഹോമം",
    rate: 250,
    description: "Performed at dawn at the Kanni Moola Ganapathy shrine with eight sacred oblations including coconut, sugarcane, and honey.",
    significance: "Removes all obstacles (Vighnas) in career, education, new ventures, and housewarming.",
    malayalamDesc: "കന്നിമൂലയിലെ ഗണപതി ഭഗവാന്റെ തിരുനടയിൽ തേങ്ങ, കരിമ്പ്, മലർ, അപ്പൽ, അവൽ, എള്ള്, തേൻ, നെയ്യ് തുടങ്ങിയ അഷ്ടദ്രവ്യങ്ങൾ ഹോമിച്ച് പ്രഭാതത്തിൽ നടത്തുന്ന വിശിഷ്ട ഹോമം.",
    malayalamSignificance: "വിദ്യാഭ്യാസം, തൊഴിൽ, ഗൃഹപ്രവേശം, പുതിയ സംരംഭങ്ങൾ എന്നിവയിലെ സർവ്വ വിഘ്നങ്ങളും തടസ്സങ്ങളും നീങ്ങി വിജയപ്രാപ്തി.",
    popular: true
  },
  {
    id: "modakam",
    deity: "ganapathy",
    deityName: "Lord Ganapathy (ഗണപതി)",
    name: "Modaka Nivedyam (12 pieces)",
    malayalam: "മോദകം നിവേദ്യം",
    rate: 100,
    description: "Handcrafted sweet dumplings made of rice flour filled with coconut and jaggery, beloved by Ganesha.",
    significance: "Brings intellect, wisdom, academic excellence, and sweet harmony in home life.",
    malayalamDesc: "അരിപ്പൊടിയിൽ തേങ്ങയും ശർക്കരയും ഏലയ്ക്കയും ചേർത്തുണ്ടാക്കുന്ന ഗണപതി ഭഗവാന്റെ ഏറ്റവും ഇഷ്ടപ്പെട്ട വിശിഷ്ട നിവേദ്യം (12 എണ്ണം).",
    malayalamSignificance: "വിദ്യാവിജയം, ബുദ്ധിവികാസം, പരീക്ഷാവിജയം, കുടുംബത്തിൽ സന്തോഷവും മധുരവും നിറയുന്നു."
  },
  {
    id: "karuka-mala",
    deity: "ganapathy",
    deityName: "Lord Ganapathy (ഗണപതി)",
    name: "Karuka Mala (Cynodon Grass Garland)",
    malayalam: "കറുകമാല ചാർത്തൽ",
    rate: 30,
    description: "Garland of freshly plucked sacred Karuka (Durva) grass offered to Lord Ganapathy.",
    significance: "Cooling effect that calms mental agitation and ensures smooth completion of endeavours.",
    malayalamDesc: "അതിരാവിലെ പറിച്ചെടുത്ത പവിത്രമായ പച്ചക്കറുക കൊണ്ട് ഭക്തിപൂർവ്വം കോർത്ത മാല ഗണപതി ഭഗവാന് ചാർത്തുന്നു.",
    malayalamSignificance: "മനക്ലേശങ്ങൾ ശമിപ്പിക്കുന്നു, ഏകാഗ്രത നൽകുന്നു, ആഗ്രഹിച്ച കാര്യങ്ങൾ തടസ്സമില്ലാതെ ശുഭമായി പൂർത്തിയാകുന്നു."
  },

  // Lord Ayyappan Offerings
  {
    id: "neeranjanam",
    deity: "ayyappan",
    deityName: "Lord Ayyappan (ധർമ്മശാസ്താവ്)",
    name: "Neeranjanam (Sesame Oil Lamp in Coconut)",
    malayalam: "നീരാജനം",
    rate: 50,
    description: "Halved coconut filled with sesame seeds, raw camphor, and sesame oil, lighted in front of Lord Sastha.",
    significance: "Prime remedy for Shani Dosha (Saturn transit / Sade Sati), warding off miseries and hardships.",
    malayalamDesc: "മുറിച്ച നാളികേരത്തിൽ കറുത്ത എള്ള് കിഴികെട്ടി, എള്ളെണ്ണയൊഴിച്ച് കർപ്പൂരം കത്തിച്ച് ധർമ്മശാസ്താവിന്റെ തിരുനടയിൽ സമർപ്പിക്കുന്ന അതിവിശിഷ്ട വഴിപാട്.",
    malayalamSignificance: "ശനിദോഷശാന്തി (ഏഴരശ്ശനി, കണ്ടകശ്ശനി), ദുരിതങ്ങളിൽ നിന്നും ആപത്തുകളിൽ നിന്നുമുള്ള ശാശ്വത രക്ഷ.",
    popular: true
  },
  {
    id: "ellu-payasam",
    deity: "ayyappan",
    deityName: "Lord Ayyappan (ധർമ്മശാസ്താവ്)",
    name: "Ellu Payasam (Sesame Pudding)",
    malayalam: "എള്ളുപായസം",
    rate: 80,
    description: "Sweet delicacy prepared with toasted black sesame seeds, jaggery, and coconut milk.",
    significance: "Brings mental strength, discipline, and overcomes spiritual obstacles.",
    malayalamDesc: "കറുത്ത എള്ള് വറുത്ത് പൊടിച്ച് നാടൻ ശർക്കരയും തേങ്ങാപ്പാലും ചേർത്ത് ശാസ്താ പ്രീതിക്കായി തയ്യാറാക്കുന്ന സ്വാദിഷ്ടമായ പായസം.",
    malayalamSignificance: "മാനസിക ധൈര്യം, ആത്മനിയന്ത്രണം, ആത്മീയ തടസ്സങ്ങളുടെ നിവാരണം എന്നിവ ഫലം."
  },

  // Lord Subrahmanian Offerings
  {
    id: "panchamrutham",
    deity: "subrahmanian",
    deityName: "Lord Subrahmanian (സുബ്രഹ്മണ്യൻ)",
    name: "Panchamrutha Abhishekam",
    malayalam: "പഞ്ചാമൃതാഭിഷേകം",
    rate: 120,
    description: "Abhishekam with five divine nectars: plantain, honey, ghee, jaggery, and candy sugar.",
    significance: "Bestows physical courage, clears land and legal disputes, and ensures victory over adversaries.",
    malayalamDesc: "കദളിപ്പഴം, തേൻ, നെയ്യ്, കൽക്കണ്ടം, ശർക്കര എന്നിവ കൂട്ടിച്ചേർത്ത് സുബ്രഹ്മണ്യ ഭഗവാന് നടത്തുന്ന വിശേഷാൽ അഭിഷേകം.",
    malayalamSignificance: "ശത്രുദോഷ നിവാരണം, വ്യവഹാര വിജയം, ശാരീരിക ധൈര്യവും ആത്മവിശ്വാസവും കൈവരുന്നു."
  },
  {
    id: "palabhishekam",
    deity: "subrahmanian",
    deityName: "Lord Subrahmanian (സുബ്രഹ്മണ്യൻ)",
    name: "Palabhishekam (Milk Bath)",
    malayalam: "പാലഭിഷേകം",
    rate: 60,
    description: "Pouring pure cow milk over the Murugan deity.",
    significance: "Promotes vitality, mental fortitude, and youthful radiance.",
    malayalamDesc: "മുരുക ഭഗവാന്റെ ദിവ്യ വിഗ്രഹത്തിൽ ശുദ്ധമായ പശുവിൻ പാൽ കൊണ്ട് ഭക്തിപൂർവ്വം നടത്തുന്ന അഭിഷേകം.",
    malayalamSignificance: "ചർമ്മരോഗശാന്തി, തേജസ്സും കാന്തിയും, യുവത്വത്തിന്റെ ഊർജ്ജസ്വലത എന്നിവ ലഭിക്കുന്നു."
  },

  // Naga Offerings
  {
    id: "noorum-palum",
    deity: "serpent",
    deityName: "Nagaraja & Nagayakshi (നാഗരാജാവ്)",
    name: "Noorum Palum Offering",
    malayalam: "നൂറും പാലും",
    rate: 150,
    description: "Traditional offering of rice powder, turmeric, and milk performed at the sacred Sarpa Kavu.",
    significance: "Cleanses Sarpa Dosha, ensures skin health, and blesses childless couples with noble progeny.",
    malayalamDesc: "തൊട്ടടുത്തുള്ള പവിത്രമായ എടപ്രക്കാവിലെ സർപ്പദേവതകൾക്കായി അരിപ്പൊടി, മഞ്ഞൾപ്പൊടി, പശുവിൻപാൽ, കരിക്കിൻവെള്ളം എന്നിവ സമർപ്പിച്ച് നടത്തുന്ന പരമ്പരാഗത തന്ത്രിക പൂജ.",
    malayalamSignificance: "സർപ്പദോഷശാന്തി, ചർമ്മരോഗ നിവാരണം, സന്താനലബ്ധി, വംശവർദ്ധനവും കുലശാന്തിയും ഫലം."
  }
];

export const NAKSHATRAS = [
  { id: "aswathi", en: "Aswathi", ml: "അശ്വതി" },
  { id: "bharani", en: "Bharani", ml: "ഭരണി" },
  { id: "karthika", en: "Karthika", ml: "കാർത്തിക" },
  { id: "rohini", en: "Rohini", ml: "രോഹിണി" },
  { id: "makayiram", en: "Makayiram (Mrigashira)", ml: "മകയിരം" },
  { id: "thiruvathira", en: "Thiruvathira (Ardra)", ml: "തിരുവാതിര" },
  { id: "punartham", en: "Punartham (Punarvasu)", ml: "പുണർതം" },
  { id: "pooyam", en: "Pooyam (Pushya)", ml: "പൂയം" },
  { id: "aayilyam", en: "Aayilyam (Ashlesha)", ml: "ആയില്യം" },
  { id: "makam", en: "Makam (Magha)", ml: "മകം" },
  { id: "pooram", en: "Pooram (Purva Phalguni)", ml: "പൂരം" },
  { id: "uthram", en: "Uthram (Uttara Phalguni)", ml: "ഉത്രം" },
  { id: "atham", en: "Atham (Hasta)", ml: "അത്തം" },
  { id: "chithira", en: "Chithira (Chitra)", ml: "ചിത്തിര" },
  { id: "chothi", en: "Chothi (Swati)", ml: "ചോതി" },
  { id: "vishakham", en: "Vishakham (Vishakha)", ml: "വിശാഖം" },
  { id: "anizham", en: "Anizham (Anuradha)", ml: "അനിഴം" },
  { id: "thrikketta", en: "Thrikketta (Jyeshtha)", ml: "തൃക്കേട്ട" },
  { id: "moolam", en: "Moolam (Mula)", ml: "മൂലം" },
  { id: "pooradam", en: "Pooradam (Purva Ashadha)", ml: "പൂരാടം" },
  { id: "uthradam", en: "Uthradam (Uttara Ashadha)", ml: "ഉത്രാടം" },
  { id: "thiruvonam", en: "Thiruvonam (Shravana)", ml: "തിരുവോണം" },
  { id: "avittam", en: "Avittam (Dhanishta)", ml: "അവിട്ടം" },
  { id: "chathayam", en: "Chathayam (Shatabhisha)", ml: "ചതയം" },
  { id: "poororuttathi", en: "Poororuttathi (Purva Bhadrapada)", ml: "പൂരുരുട്ടാതി" },
  { id: "uthrattathi", en: "Uthrattathi (Uttara Bhadrapada)", ml: "ഉത്രട്ടാതി" },
  { id: "revathi", en: "Revathi", ml: "രേവതി" }
];

export const FESTIVALS_DATA: FestivalEvent[] = [
  {
    title: "8-Day Annual Utsavam in Dhanu",
    malayalam: "ധനു തിരുവാതിര വാർഷിക ഉത്സവം (8 ദിവസങ്ങൾ)",
    season: "Malayalam Month: Dhanu (Dec – Jan)",
    duration: "8 Auspicious Days",
    description: "The grandest annual celebration of Thirumarady Mahadeva Temple. Commences with the ceremonial Kodiyettam (flag hoisting) and culminates on the holy asterism of Thiruvathira with the sacred Arattu ritual bath.",
    highlights: [
      "Day 1: Ceremonial Flag Hoisting (കൊടിയേറ്റം) & Tantric Consecration by Kidangassery Thanthri",
      "Day 2 to 6: Daily Utsavabali, Sreebhoothabali, Caparisoned Elephant Ezhunnallippu, Thayambaka, and Panchavadyam",
      "Day 7: Majestic Pallivetta (Divine Royal Hunt) with nighttime torchlit procession and Pandi Melam",
      "Day 8: Sacred Arattu (Holy Ritual Bath) on Thiruvathira Nakshatra, followed by Arattu Sadya and Kodiyirakkam"
    ]
  },
  {
    title: "Maha Shivaratri Mahotsavam",
    malayalam: "മഹാ ശിവരാത്രി മഹോത്സവം",
    season: "Malayalam Month: Kumbham (Feb – Mar)",
    duration: "Full Night Vigil (Akhanda Darshan)",
    description: "The supreme night of Lord Shiva. Devotees observe strict fasting (Vratham) and remain awake chanting 'Om Namah Shivaya'. The temple witnesses four Yama Poojas and Laksharchana throughout the night.",
    highlights: [
      "Continuous Abhishekam with milk, honey, tender coconut, and holy ashes (Bhasmam)",
      "Four Vedic Yama Poojas conducted at 09:00 PM, 12:00 Midnight, 03:00 AM, and 05:00 AM",
      "Grand Shivaratri Deeparadhana with lighting of thousands of earthenware lamps",
      "Bilva Patra Archana offering thousands of sacred three-leafed bael leaves to the Shivalinga"
    ]
  },
  {
    title: "Monthly Pradosham (Thriyodashi)",
    malayalam: "പ്രതിമാസ പ്രദോഷ വ്രതം",
    season: "Twice Monthly (Shukla & Krishna Paksha Thriyodashi)",
    duration: "Evening Ritual",
    description: "Pradosham Sandhya is the divine time when Lord Shiva performs the cosmic Ananda Tandava dance on Mount Kailash to relieve the gods of their afflictions. Somavara Pradosham (Monday Pradosham) is celebrated with extraordinary grandeur.",
    highlights: [
      "Special Rudra Dhara & Panchamrutham Abhishekam during twilight hours",
      "Pradosha Sandhya Pooja and Deeparadhana accompanied by conch shells and cymbals",
      "Holy Pradosha Pradakshinam observing the strict Somassuthram rule"
    ]
  },
  {
    title: "Mandala-Makaravilakku Season",
    malayalam: "മണ്ഡല-മകരവിളക്ക് മഹോത്സവം",
    season: "Vrichikam 1 to Dhanu 11 (Nov – Dec)",
    duration: "41 Sacred Days",
    description: "Dedicated to Lord Ayyappan. The temple serves as an essential resting and worship sanctuary for hundreds of Sabarimala pilgrims travelling along the Piravom–Koothattukulam route.",
    highlights: [
      "Special Kettunira (Irumudi Kettu) facilities for Sabarimala Ayyappa Swamis",
      "Daily Neeranjanam and Ayyappan Vilakku poojas at dusk",
      "Ayyappa Bhajan sessions and Annadanam distribution for passing devotees"
    ]
  }
];

export const DEITIES_INFO = [
  {
    name: "Lord Shiva (Presiding Deity)",
    malayalam: "ശ്രീ മഹാദേവൻ (പ്രധാന പ്രതിഷ്ഠ)",
    direction: "East-Facing (കിഴക്കോട്ട് ദർശനം)",
    posture: "Swayambhu / Jyotirlinga (Peaceful, Gracious Form)",
    description: "The supreme presiding deity of Thirumarady temple is Lord Shiva, facing East. The consecrated Lingam represents cosmic consciousness, pure auspiciousness, and spiritual bliss. Lord Shiva here is worshipped in his serene, boon-bestowing Sadasiva bhava, granting protection, inner peace, and liberation from diseases and fears.",
    keyOfferings: ["Jaladhara", "Ksheeradhara", "Maha Mrityunjaya Homam", "Swayamvara Pushpanjali", "Chuttuvilakku"],
    pradakshinaCount: "1 (or 3 half-pradakshinas according to strict Shiva Kshetra rules)"
  },
  {
    name: "Lord Ganapathy (Kanni Moola)",
    malayalam: "ശ്രീ ഗണപതി (കന്നിമൂല)",
    direction: "South-West Corner (Kanni Moola)",
    posture: "Sitting with Modaka and Goad in hands",
    description: "Located in the auspicious South-West corner of the Nalambalam. Lord Ganesha is the remover of all obstacles (Vighnaharta). Devotees always begin their prayers here before undertaking new enterprises, building houses, or commencing academic studies.",
    keyOfferings: ["Ashtadravya Ganapathy Homam", "Modakam", "Karuka Mala", "Coconut breaking"],
    pradakshinaCount: "1 Pradakshina"
  },
  {
    name: "Lord Ayyappan (Dharmashasta)",
    malayalam: "ശ്രീ ധർമ്മശാസ്താവ് (അയ്യപ്പൻ)",
    direction: "South-West / Western Courtyard",
    posture: "Brahma-charya Yogic Posture with Chinmudra",
    description: "Lord Dharmashasta, the son of Shiva and Mohini (Vishnu), sits in contemplative poise, protecting his devotees from malefic planetary influences (especially Saturn / Shani Dosha) and instilling righteous discipline and truth.",
    keyOfferings: ["Neeranjanam", "Ellu Payasam", "Mandala Ghee Abhishekam"],
    pradakshinaCount: "5 Pradakshinas"
  },
  {
    name: "Lord Subrahmanian (Murugan)",
    malayalam: "ശ്രീ സുബ്രഹ്മണ്യസ്വാമി",
    direction: "North-West Courtyard",
    posture: "Standing holding the divine Vel (Spear)",
    description: "Lord Murugan / Karthikeya embodies divine valor, wisdom, and victory over inner darkness. Devotees seek his grace for marital progeny, overcoming adversaries, and cure for speech and nervous ailments.",
    keyOfferings: ["Panchamrutham", "Palabhishekam", "Kavadi Offering"],
    pradakshinaCount: "3 Pradakshinas"
  },
  {
    name: "Nagaraja & Nagayakshi (Edaprakavu)",
    malayalam: "നാഗരാജാവ് & നാഗയക്ഷി",
    direction: "Sacred Grove (Sarpa Kavu)",
    posture: "Serpent King with Five-Headed Hood & Nagayakshi",
    description: "The traditional serpent shrines linked historically to the ancient Edaprakavu adjacent to the temple. Essential for ecological preservation and overcoming ancestral Sarpa Doshas.",
    keyOfferings: ["Noorum Palum", "Manjal Podi (Turmeric powder) Archana"],
    pradakshinaCount: "Traditional clockwise circumambulation outside the stone enclosure"
  }
];

export const PRADAKSHINA_GUIDELINES = {
  title: "Strict Kerala Shiva Kshetra Pradakshina Rule (Somassuthram Rule)",
  malayalamTitle: "ശിവക്ഷേത്ര പ്രദക്ഷിണ വിധി (സോമസൂത്രം മറികടക്കരുത്)",
  importance: "In traditional Kerala Tantric Agamas, circumambulating Lord Shiva is completely different from other temples because one must NEVER cross the Somassuthram (the holy water spout on the northern side through which the sacred Abhisheka Theertham flows).",
  steps: [
    {
      step: 1,
      title: "Begin from Chandikeswara / Nandi",
      desc: "Start clockwise from near the flagstaff (Dwajasthambham) or Nandi / eastern entrance, moving towards the north."
    },
    {
      step: 2,
      title: "Halt at the Somassuthram (Theertha Jalam Chute)",
      desc: "Walk clockwise until you reach the northern stone spout (Somassuthram). Bow your head respectfully to the holy water channel without stepping over it."
    },
    {
      step: 3,
      title: "Reverse in Anti-Clockwise Direction",
      desc: "Turn back and walk in reverse (anti-clockwise) past the eastern entrance, southern side, until you reach the western/north-western point just across the spout."
    },
    {
      step: 4,
      title: "Bow & Reverse Again",
      desc: "Bow to the Somassuthram from the other side, turn back, and walk clockwise to return to the starting point. This completing cycle equals one sacred Shiva Pradakshina."
    }
  ],
  scripturalReason: "Crossing the Somassuthram disrupts the divine flow of Shiva Shakthi (Soma and Agni poles) and is considered inauspicious. Following this prescribed semi-circular arc channels immense peaceful vibrations into the devotee's subtle body."
};

export const DISTANCES_INFO = [
  { place: "Cochin International Airport (COK)", distance: "52 km", time: "1 hr 30 mins", mode: "Via MC Road / SH 40" },
  { place: "Piravom Road Railway Station", distance: "16 km", time: "25 mins", mode: "Direct auto/taxi/bus" },
  { place: "Ernakulam Junction (South) / Town", distance: "38 km", time: "1 hr 10 mins", mode: "Via Tripunithura – Piravom" },
  { place: "Koothattukulam KSRTC Stand", distance: "8 km", time: "12 mins", mode: "Frequent KSRTC & private buses" },
  { place: "Piravom Town & Bus Stand", distance: "8 km", time: "12 mins", mode: "Direct local bus route" },
  { place: "Pazhoor Perumthrikkovil Temple", distance: "9 km", time: "15 mins", mode: "Famous twin Shiva shrine" },
  { place: "Chottanikkara Bhagavathy Temple", distance: "26 km", time: "40 mins", mode: "Via Mulanthuruthy" }
];

