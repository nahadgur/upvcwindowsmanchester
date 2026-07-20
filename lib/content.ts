export type Faq = { question: string; answer: string };
export type ContentSection = { heading: string; paragraphs: string[] };

export type ServicePage = {
  slug: string;
  name: string;
  title: string;
  description: string;
  intro: string;
  image: string;
  imageAlt: string;
  bestFor: string[];
  choices: string[];
  sections: ContentSection[];
  faqs: Faq[];
};

export type AreaPage = {
  slug: string;
  name: string;
  title: string;
  description: string;
  intro: string;
  image: string;
  imageAlt: string;
  neighbourhoods: string[];
  propertyTypes: string[];
  localDetail: string;
  planningNote: string;
  priorities: string[];
  faqs: Faq[];
};

export type GuidePage = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  image: string;
  imageAlt: string;
  updated: string;
  readTime: string;
  sections: ContentSection[];
  checklist?: string[];
  sources?: { label: string; href: string }[];
  faqs: Faq[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "upvc-windows",
    name: "uPVC windows",
    title: "uPVC windows in Manchester",
    description: "Compare quotes for made-to-measure uPVC windows fitted across Manchester and Greater Manchester.",
    intro: "uPVC remains a practical frame material for Manchester homes because it needs little upkeep, works with several opening styles and comes in colours that suit both brick terraces and newer estates.",
    image: "/images/manchester-bay-window.webp",
    imageAlt: "White uPVC bay window on a red-brick Manchester terrace",
    bestFor: ["Low-maintenance replacement projects", "Homes that need better draught control", "White, coloured or woodgrain frame finishes", "Single windows through to full-house work"],
    choices: ["Frame colour inside and out", "Double or triple glazing", "Handle and hinge specification", "Trickle ventilation", "Decorative bars or plain glass", "Sill depth and finishing trims"],
    sections: [
      { heading: "Start with the opening, not the brochure", paragraphs: ["A good survey records more than width and height. The installer should check the condition of the reveal, the lintel, access, existing ventilation and how the old frame sits in the wall. Those details affect both the quote and the finish.", "Ask for each window style and opening configuration to appear on the written specification. A vague line such as ‘six white windows’ leaves too much room for assumptions about glass, locks and finishing work."] },
      { heading: "Frame choices for Manchester property styles", paragraphs: ["Plain white casements suit many post-war semis and newer homes. Sash-style frames or carefully proportioned bays can sit better in Victorian and Edwardian streets. Coloured foil finishes may work on modern extensions, though nearby homes and planning controls deserve a check before you order.", "Slim sightlines preserve more glass area. Chunky outer frames can reduce daylight, especially in smaller openings. Compare drawings or product samples rather than judging the frame from a showroom photograph."] },
    ],
    faqs: [
      { question: "How long do uPVC windows last?", answer: "Service life depends on the frame system, hardware, exposure and fitting quality. Ask what the guarantee covers and whether hinges, handles and sealed glass units carry different terms." },
      { question: "Can I choose a colour other than white?", answer: "Yes. Common choices include anthracite grey, black and woodgrain finishes. Colour availability and lead time vary by frame system." },
      { question: "Will new windows stop condensation?", answer: "They may reduce cold surface condensation, but room humidity and ventilation still matter. Condensation between the panes points to a failed sealed unit." },
    ],
  },
  {
    slug: "replacement-windows",
    name: "Replacement windows",
    title: "Replacement windows in Manchester",
    description: "Request local quotes for replacing draughty, damaged or inefficient windows in Greater Manchester homes.",
    intro: "Replacement work should fix the cause of the problem and leave the wall, sill and ventilation in sound condition. A clear survey helps you avoid paying for a new frame around an old defect.",
    image: "/images/upvc-casement-window.webp",
    imageAlt: "Close view of a white replacement casement window in red brick",
    bestFor: ["Draughty or difficult-to-close windows", "Misted double-glazed units", "Rotten timber frames", "Full-house energy upgrades"],
    choices: ["Repair or full replacement", "Like-for-like appearance", "Opening direction and escape needs", "Ventilation provision", "Making good around the reveal", "Removal of old frames and glass"],
    sections: [
      { heading: "Work out what has failed", paragraphs: ["A misted pane may need a replacement sealed unit rather than a complete frame. Worn hinges can cause draughts and poor closing. Rotten timber, distorted frames or repeated water entry can justify full replacement.", "Ask the surveyor to identify the fault in writing. A repair can cost less and preserve an original frame, while a full replacement can address several problems in one job."] },
      { heading: "Plan for the finish around the frame", paragraphs: ["Removing an old frame can expose damaged plaster, uneven brickwork or old sealant. The quotation should state who handles internal trims, external pointing, decoration and waste.", "Check the sightlines before ordering. A replacement frame fitted inside an older opening can reduce the visible glass area if the sections are deeper than the originals."] },
    ],
    faqs: [
      { question: "Do all misted windows need new frames?", answer: "No. If the frame and hardware remain sound, an installer may replace only the failed sealed glass unit." },
      { question: "Can windows be replaced in winter?", answer: "Installers work throughout the year. They remove and replace one opening at a time, though severe weather can affect external sealing and the schedule." },
      { question: "Who deals with Building Regulations?", answer: "A registered competent person can self-certify compliant work. Another route is an application through building control. Confirm the route before work starts." },
    ],
  },
  {
    slug: "casement-windows",
    name: "Casement windows",
    title: "uPVC casement windows in Manchester",
    description: "Compare quotes for secure top-hung and side-hung uPVC casement windows across Greater Manchester.",
    intro: "Casement windows suit many Manchester homes because each pane can be fixed, top-hung or side-hung. That flexibility helps you balance ventilation, cleaning, security and the proportions of the elevation.",
    image: "/images/upvc-casement-window.webp",
    imageAlt: "White side-opening uPVC casement window",
    bestFor: ["Semis and detached homes", "Simple, efficient opening layouts", "Bedrooms that need escape openings", "Easy-to-match replacement work"],
    choices: ["Top-hung or side-hung openers", "Fixed panes for more glass area", "Fire-escape hinge requirements", "Restrictors for upper floors", "Handle height and colour", "Mullion and transom layout"],
    sections: [
      { heading: "Choose an opening layout you will use", paragraphs: ["A bank of small opening panes adds frames and hardware. Larger fixed panes admit more light but reduce ventilation. Sketch how you use the room before copying the old layout.", "Bedrooms may need an escape window that meets the applicable Building Regulations. Upper-floor openings can also benefit from restrictors, especially in homes with young children."] },
      { heading: "Compare hardware as well as glass", paragraphs: ["Hinges, locking points and keeps take the daily load. Ask which parts the installer uses and how long the hardware guarantee lasts. Stainless or corrosion-resistant hardware can matter on exposed elevations.", "A secure window still needs simple operation. Test sample handles and ask how the installer adjusts dropped sashes after fitting."] },
    ],
    faqs: [
      { question: "Do casement windows open inward or outward?", answer: "Most UK uPVC casements open outward. Tilt-and-turn windows offer an inward-opening alternative." },
      { question: "Can casements match an existing window?", answer: "An installer can usually match the broad layout and colour, but frame widths and glass tints may differ between systems." },
      { question: "Are fixed panes cheaper?", answer: "They use less hardware and can cost less than opening panes of the same size. The overall quote still depends on glass, access and frame configuration." },
    ],
  },
  {
    slug: "sash-windows",
    name: "Sash-style windows",
    title: "uPVC sash-style windows in Manchester",
    description: "Find quotes for low-maintenance sash-style windows for Manchester terraces, villas and period homes.",
    intro: "Sash-style uPVC windows can retain vertical proportions while adding modern seals and double glazing. The best result comes from matching the original opening, meeting rail and glazing-bar positions rather than adding decorative detail at random.",
    image: "/images/sash-window-interior.webp",
    imageAlt: "Sash-style windows inside a Manchester period room",
    bestFor: ["Victorian and Edwardian terraces", "Period appearance with low upkeep", "Vertical openings", "Homes where proportions matter"],
    choices: ["Run-through or surface-mounted horns", "Mechanical joints or welded corners", "Glazing-bar pattern", "Sash travel and restrictors", "White or woodgrain finish", "Traditional or modern hardware"],
    sections: [
      { heading: "Proportion does most of the visual work", paragraphs: ["The meeting rail should line up with neighbouring windows and the wider elevation. Uneven panes or thick bars can change the character of a terrace even when the frame is white.", "Photograph the frontage straight-on and compare drawings before you sign the order. If the home sits in a conservation area, check the local rules before choosing a material or changing the design."] },
      { heading: "Ask how the sashes operate and clean", paragraphs: ["Different systems use springs, balances and tilt mechanisms. Ask the installer to demonstrate ventilation positions, travel limits and access for cleaning the outer glass.", "A heavier sash needs sound balances and correct adjustment. The written guarantee should explain which moving parts it covers."] },
    ],
    faqs: [
      { question: "Can uPVC sash windows look traditional?", answer: "Good proportions, suitable joints and restrained detailing help. Request a full-size corner sample before ordering." },
      { question: "Do sash-style windows tilt for cleaning?", answer: "Many systems include inward tilting sashes, but operation varies. Ask for a demonstration during the survey." },
      { question: "Can I use uPVC in a conservation area?", answer: "Local controls differ. Manchester City Council advises checking before replacing windows where conservation rules or an Article 4 direction may apply." },
    ],
  },
  {
    slug: "bay-windows",
    name: "Bay windows",
    title: "uPVC bay windows in Manchester",
    description: "Request quotes for replacing and upgrading bay windows in Manchester terraces and semi-detached homes.",
    intro: "A bay window affects the appearance, structure and weathering of the front elevation. Replacement work needs accurate angles, suitable support and careful external sealing rather than a row of standard frames joined on site.",
    image: "/images/manchester-bay-window.webp",
    imageAlt: "Three-part white uPVC bay window on a Manchester terrace",
    bestFor: ["Bay-fronted terraces", "1930s semi-detached homes", "Rooms that benefit from wider views", "Replacing cold or leaking bay frames"],
    choices: ["Three, four or five-part layout", "Opening panes and ventilation", "Structural bay-pole requirements", "Roof and sill condition", "Internal board and trim finish", "Matching upper and lower bays"],
    sections: [
      { heading: "The survey should cover the whole bay", paragraphs: ["The installer should inspect the bay roof, base, angles and any load carried through the frame. Cracks, movement or water marks need attention before the order reaches manufacture.", "Ask whether the quote includes structural bay poles, insulation around the board and repairs to roofing or cladding. Those items can sit outside a basic window price."] },
      { heading: "Keep the frontage balanced", paragraphs: ["Pane widths, transom heights and opening lights should work with the upper floor and neighbouring properties. A simplified layout can improve light, while a poor layout can make the bay look heavy.", "New projecting bays may count as extensions for planning purposes. Like-for-like replacement follows a different route, but listed buildings and conservation controls still need care."] },
    ],
    faqs: [
      { question: "Does a bay window need structural support?", answer: "Some bays carry loads from above and need suitable structural poles or other support. A competent surveyor should assess the existing construction." },
      { question: "Can only one part of a bay be replaced?", answer: "It may be possible, but matching frame profiles, colour and glass can prove difficult. The installer should also confirm that the remaining sections are sound." },
      { question: "Will a new bay feel warmer?", answer: "Modern glazing and better seals can reduce draughts and cold surfaces. The bay roof, board and surrounding construction also affect heat loss." },
    ],
  },
  {
    slug: "tilt-and-turn-windows",
    name: "Tilt-and-turn windows",
    title: "Tilt-and-turn windows in Manchester",
    description: "Compare quotes for secure inward-opening tilt-and-turn uPVC windows in Manchester flats and homes.",
    intro: "Tilt-and-turn windows use one handle for two opening modes. Tilt provides controlled ventilation at the top, while the turn position opens the sash inward for cleaning and access.",
    image: "/images/tilt-turn-window.webp",
    imageAlt: "White tilt-and-turn window open at the top in a Manchester flat",
    bestFor: ["Flats and upper floors", "Rooms with restricted outside access", "Controlled everyday ventilation", "Modern elevations"],
    choices: ["Sash size and weight", "Handle sequence", "Restrictors and safety", "Inward clearance", "Frame colour", "Fixed and opening pane layout"],
    sections: [
      { heading: "Check the space inside the room", paragraphs: ["The turn position needs clear space inside. Curtains, blinds, taps and furniture can obstruct the sash. A survey should record those conflicts before the opening direction is set.", "Large sashes place more load on the hardware. Ask about size limits, adjustment and the guarantee for hinges and gearing."] },
      { heading: "Use each mode for the right job", paragraphs: ["The tilt position gives background ventilation without a wide-open sash. The turn position helps with cleaning and purge ventilation, but you should not leave it open where a child or vulnerable person could reach it.", "A window locked on a slight night-vent setting does not replace compliant background ventilation. The installer should specify how the design meets current ventilation requirements."] },
    ],
    faqs: [
      { question: "Do tilt-and-turn windows open inward?", answer: "Yes. The sash tilts inward at the top or swings inward from the side, depending on the handle position." },
      { question: "Are they suitable for small rooms?", answer: "They can work well if the full-turn sash has enough clear space. Measure blinds, furniture and deep reveals before ordering." },
      { question: "Can they be locked in tilt mode?", answer: "Hardware options vary. Ask about handle locks, restrictors and the safe ventilation position offered by the chosen system." },
    ],
  },
  {
    slug: "double-glazing",
    name: "Double glazing",
    title: "Double glazing in Manchester",
    description: "Compare local quotes for double-glazed uPVC windows and sealed-unit replacement across Greater Manchester.",
    intro: "Double glazing combines two panes with a sealed cavity. Frame design, glass coatings, spacer bars, installation and ventilation all affect how the finished window performs.",
    image: "/images/sash-window-interior.webp",
    imageAlt: "Modern double-glazed sash-style windows in a period room",
    bestFor: ["Replacing single glazing", "Failed sealed units", "Reducing draughts and cold surfaces", "Whole-home upgrades"],
    choices: ["Whole-window or centre-pane performance", "Low-emissivity glass", "Warm-edge spacer", "Safety glass locations", "Acoustic glass options", "Patterned or obscure glass"],
    sections: [
      { heading: "Compare the complete window specification", paragraphs: ["A centre-pane glass figure does not describe the frame, spacer and installation. Ask for the declared whole-window U-value or Window Energy Rating for the exact configuration you are buying.", "Large panes, decorative bars and opening sections can change performance. Keep the product schedule with your quotation so each installer prices the same requirement."] },
      { heading: "Glass can solve different problems", paragraphs: ["Laminated acoustic glass can help with some traffic noise, while low-emissivity coatings reduce heat transfer. Obscure and safety glass serve privacy and impact requirements in bathrooms, doors and low-level positions.", "No glass specification fixes poor ventilation or gaps around the frame. The survey and fitting detail still decide whether the room feels comfortable after installation."] },
    ],
    faqs: [
      { question: "Can only the glass be replaced?", answer: "Yes, if the frame and hardware remain serviceable. A failed sealed unit often causes misting between panes." },
      { question: "Is triple glazing always better?", answer: "It can improve thermal or acoustic performance, but extra weight, cost and the exact specification matter. Compare measured values for the complete window." },
      { question: "Does double glazing block road noise?", answer: "It can reduce noise, though pane thickness, cavity, seals and background ventilators affect the result. Ask for an acoustic specification where noise drives the project." },
    ],
  },
];

export const areaPages: AreaPage[] = [
  {
    slug: "salford", name: "Salford", title: "uPVC windows in Salford", description: "Compare uPVC window quotes for terraces, semis and flats across Salford.",
    intro: "Salford includes dense Victorian streets, post-war estates and apartment development around the Quays. Window design needs to suit the building and the exposure rather than follow one city-wide specification.",
    image: "/images/manchester-bay-window.webp", imageAlt: "White bay window on a Greater Manchester red-brick terrace",
    neighbourhoods: ["Eccles", "Swinton", "Pendleton", "Worsley", "Irlam", "Salford Quays"], propertyTypes: ["Red-brick terraces", "1930s semis", "Post-war houses", "Purpose-built flats"],
    localDetail: "Busy routes can make acoustic glass and ventilator placement worth discussing. Apartments also bring access, management-company and opening-restrictor questions that a house survey may not cover.",
    planningNote: "Leaseholders should check the lease and obtain any required freeholder or management-company consent before changing external windows.",
    priorities: ["Match the existing elevation", "Check access and parking", "Discuss noise before choosing glass", "Confirm approvals for flats"],
    faqs: [{ question: "Do you cover all Salford postcodes?", answer: "Quote requests are accepted across Salford. Installer availability depends on the postcode and job size." }, { question: "Can apartment windows be replaced?", answer: "Yes, but the lease, façade specification and access method may restrict the product and installer." }],
  },
  {
    slug: "stockport", name: "Stockport", title: "uPVC windows in Stockport", description: "Request local quotes for uPVC and replacement windows across Stockport.",
    intro: "Stockport housing ranges from stone and brick terraces to bay-fronted semis and newer suburban estates. Accurate proportions matter on older front elevations, while access and large openings often shape quotes for semis.",
    image: "/images/sash-window-interior.webp", imageAlt: "Sash-style double glazing in a period Greater Manchester room",
    neighbourhoods: ["Heaton Moor", "Bramhall", "Cheadle", "Marple", "Reddish", "Hazel Grove"], propertyTypes: ["Period terraces", "Bay-fronted semis", "Detached suburban homes", "Converted flats"],
    localDetail: "Bay windows appear across many Stockport neighbourhoods. Ask the surveyor to inspect bay support, roof condition and internal boards rather than pricing the frames alone.",
    planningNote: "Older properties and conservation areas may need a closer match to existing materials and details. Check with Stockport Council before altering a protected elevation.",
    priorities: ["Survey bay structure", "Preserve period proportions", "Check frame colour in daylight", "Include all making good"],
    faqs: [{ question: "Can new windows match neighbouring bays?", answer: "Installers can match the broad pane layout and colour. Frame depth and detailing should be compared using drawings or samples." }, { question: "Do installers cover Marple and Bramhall?", answer: "Requests can be submitted from across the Stockport borough, subject to installer capacity." }],
  },
  {
    slug: "trafford", name: "Trafford", title: "uPVC windows in Trafford", description: "Compare replacement-window quotes for homes across Trafford and south-west Manchester.",
    intro: "Trafford combines Victorian terraces, substantial inter-war semis and modern homes. Front windows can carry much of a property’s character, so the frame layout deserves the same attention as energy performance.",
    image: "/images/upvc-casement-window.webp", imageAlt: "White uPVC casement window fitted into red brick",
    neighbourhoods: ["Altrincham", "Sale", "Stretford", "Urmston", "Hale", "Partington"], propertyTypes: ["Victorian terraces", "Inter-war semis", "Large detached houses", "Modern estates"],
    localDetail: "Larger semis may combine bays, landing windows and rear openings in one project. A room-by-room schedule keeps opening styles and glass choices clear.",
    planningNote: "Trafford has conservation areas where replacement details can face tighter controls. Check the address before switching material, colour or pane pattern.",
    priorities: ["Create a window schedule", "Review conservation controls", "Keep bay and upper windows aligned", "Compare guarantees by component"],
    faqs: [{ question: "Can I request a full-house quote in Trafford?", answer: "Yes. Count each opening and note any bays, doors or unusual access when submitting the request." }, { question: "Should every room use the same glass?", answer: "No. Bathrooms, low-level glazing and noisy elevations may need different glass specifications." }],
  },
  {
    slug: "oldham", name: "Oldham", title: "uPVC windows in Oldham", description: "Find uPVC window quotes for exposed, stone and brick homes across Oldham.",
    intro: "Oldham’s elevation and weather exposure make seals, drainage and external finishing worth close attention. Stone openings and uneven reveals can also need more survey time than a standard newer property.",
    image: "/images/upvc-casement-window.webp", imageAlt: "Weather-sealed white uPVC casement window",
    neighbourhoods: ["Chadderton", "Royton", "Shaw", "Lees", "Saddleworth", "Failsworth"], propertyTypes: ["Stone terraces", "Brick semis", "Cottages", "Newer family homes"],
    localDetail: "Exposed elevations put hardware, seals and drainage under more pressure. Ask how the chosen system handles weather and which external sealant or pointing method the installer proposes.",
    planningNote: "Stone villages and conservation areas may call for specific proportions or materials. Check before replacing original windows in a protected property.",
    priorities: ["Inspect stone and reveals", "Specify external sealing", "Choose durable hardware", "Check protected status"],
    faqs: [{ question: "Are coloured frames available in Oldham?", answer: "Yes. Grey, black and woodgrain finishes are common options, though planning restrictions may affect protected properties." }, { question: "Can installers work with stone openings?", answer: "Yes. The survey should record sill details, fixing points and the finish around uneven stone." }],
  },
  {
    slug: "bolton", name: "Bolton", title: "uPVC windows in Bolton", description: "Request quotes for casement, sash-style and bay windows throughout Bolton.",
    intro: "Bolton has a broad mix of stone cottages, terraces, inter-war semis and newer estates. One frame system can cover several styles, but the pane layout and finish should change with the property.",
    image: "/images/manchester-bay-window.webp", imageAlt: "uPVC bay window on a traditional Greater Manchester home",
    neighbourhoods: ["Horwich", "Farnworth", "Westhoughton", "Heaton", "Astley Bridge", "Little Lever"], propertyTypes: ["Stone cottages", "Terraced houses", "Bay-fronted semis", "New-build homes"],
    localDetail: "Bay-fronted semis often need a coordinated design across both floors. Ask for elevation drawings that show transom heights and opening sections before signing the order.",
    planningNote: "Original details can matter in conservation areas and on listed buildings. Written council advice may be needed before work starts.",
    priorities: ["Align upper and lower bays", "Match surrounding masonry", "Confirm ventilation", "Keep the final product schedule"],
    faqs: [{ question: "Can one damaged window be replaced?", answer: "Yes. Matching an older profile or foil colour may take extra checking." }, { question: "Do you cover Horwich and Westhoughton?", answer: "The quote service accepts requests from both areas and throughout the Bolton borough." }],
  },
  {
    slug: "bury", name: "Bury", title: "uPVC windows in Bury", description: "Compare uPVC window quotes from companies covering Bury and nearby towns.",
    intro: "Bury homes include compact terraces, bay-fronted semis and larger properties toward the borough’s northern edge. Room use, exposure and the street-facing elevation should guide the specification.",
    image: "/images/sash-window-interior.webp", imageAlt: "Traditional sash-style windows with modern glazing",
    neighbourhoods: ["Prestwich", "Whitefield", "Radcliffe", "Ramsbottom", "Tottington", "Unsworth"], propertyTypes: ["Brick terraces", "Period villas", "1930s semis", "Modern family homes"],
    localDetail: "Period streets around Prestwich and Ramsbottom can benefit from restrained glazing bars and suitable sightlines. A standard casement grid may look too heavy in taller openings.",
    planningNote: "Check conservation-area guidance where the frontage contributes to a historic street. Like-for-like appearance can still require close attention to material and detail.",
    priorities: ["Photograph the frontage", "Compare full-size samples", "Check drainage and sills", "Plan safe upper-floor openings"],
    faqs: [{ question: "Can sash-style windows be made in uPVC?", answer: "Yes. Compare corner joints, sash depth, horns and glazing bars before choosing a system." }, { question: "Can I get quotes in Ramsbottom?", answer: "Yes, subject to an installer covering the postcode and the proposed job." }],
  },
  {
    slug: "rochdale", name: "Rochdale", title: "uPVC windows in Rochdale", description: "Find replacement-window quotes for stone, brick and modern homes in Rochdale.",
    intro: "Rochdale’s older stone housing and exposed locations need careful surveys. The fitter must plan fixings, sealant and making good around each opening rather than relying on standard trim widths.",
    image: "/images/upvc-casement-window.webp", imageAlt: "Close detail of a sealed white casement window",
    neighbourhoods: ["Middleton", "Heywood", "Littleborough", "Milnrow", "Wardle", "Bamford"], propertyTypes: ["Stone terraces", "Cottages", "Brick semis", "Newer estates"],
    localDetail: "Wide temperature swings and wind-driven rain expose weak joints. Ask the installer to explain frame drainage, perimeter sealing and how the sill meets the masonry.",
    planningNote: "Some stone settlements include listed buildings or conservation areas. Modern frame material may not suit every protected opening.",
    priorities: ["Record wall construction", "Check exposed elevations", "Specify perimeter finish", "Review heritage controls"],
    faqs: [{ question: "Can uPVC be fitted into stone walls?", answer: "Yes, where suitable. The survey should identify fixing locations, sill details and the required finish around the frame." }, { question: "Do you cover Littleborough?", answer: "Quote requests are accepted across Rochdale borough, including Littleborough." }],
  },
  {
    slug: "tameside", name: "Tameside", title: "uPVC windows in Tameside", description: "Compare local quotes for uPVC windows across Tameside.",
    intro: "Tameside spans dense terraced streets, hillside stone homes and suburban estates. Window projects often need a mix of straightforward casements, privacy glass and carefully planned front bays.",
    image: "/images/manchester-bay-window.webp", imageAlt: "Red-brick terrace with white uPVC bay window",
    neighbourhoods: ["Ashton-under-Lyne", "Stalybridge", "Hyde", "Denton", "Droylsden", "Mossley"], propertyTypes: ["Terraced houses", "Stone homes", "Post-war semis", "Modern estates"],
    localDetail: "Properties near busy roads may need a conversation about acoustic glass and noise-attenuating ventilation. The glass and ventilator should form one specification.",
    planningNote: "Conservation controls may apply in older centres and villages. Check before changing the pattern or material of prominent windows.",
    priorities: ["Discuss road noise", "Coordinate glass and ventilation", "Inspect bay roofs", "Check privacy-glass locations"],
    faqs: [{ question: "Can acoustic glass be added to uPVC frames?", answer: "Yes. Ask for a tested glass build-up and discuss how background ventilation affects the result." }, { question: "Are Mossley requests accepted?", answer: "Yes. Submit the postcode so coverage can be checked." }],
  },
  {
    slug: "wigan", name: "Wigan", title: "uPVC windows in Wigan", description: "Request quotes for new and replacement uPVC windows throughout Wigan borough.",
    intro: "Wigan’s housing includes mining terraces, semis, cottages and broad newer developments. Larger borough distances make accurate job details useful when matching a request with an installer.",
    image: "/images/upvc-casement-window.webp", imageAlt: "White uPVC casement window in a brick house",
    neighbourhoods: ["Leigh", "Atherton", "Hindley", "Standish", "Ashton-in-Makerfield", "Tyldesley"], propertyTypes: ["Traditional terraces", "Semi-detached homes", "Cottages", "New-build estates"],
    localDetail: "Full-house projects can combine older front windows with later rear extensions. Separate each elevation on the schedule so colours, sill depths and opening styles do not get mixed.",
    planningNote: "Listed buildings and conservation areas need checks before replacement. Leaseholders should also obtain any required consent.",
    priorities: ["List each elevation", "Photograph unusual openings", "Confirm access and waste removal", "Compare like-for-like schedules"],
    faqs: [{ question: "Can I request quotes in Leigh or Atherton?", answer: "Yes. Both areas fall within the service coverage, subject to installer availability." }, { question: "Can front and rear windows use different colours?", answer: "Many systems allow different finishes inside and outside. Planning or estate rules may affect visible elevations." }],
  },
  {
    slug: "manchester-city-centre", name: "Manchester city centre", title: "Replacement windows in Manchester city centre", description: "Request quotes for apartment and commercial-style residential window replacement in central Manchester.",
    intro: "Central Manchester window work often involves flats, converted mills and managed buildings. Access, façade rules and responsibility under the lease can matter more than the number of windows.",
    image: "/images/tilt-turn-window.webp", imageAlt: "Tilt-and-turn window in a modern Manchester apartment",
    neighbourhoods: ["Ancoats", "Castlefield", "Northern Quarter", "Deansgate", "New Islington", "Green Quarter"], propertyTypes: ["Purpose-built flats", "Converted mills", "Townhouses", "Managed developments"],
    localDetail: "Upper floors may need scaffolding, rope access or internal fitting methods. The building manager may specify frame colour, opening restrictors, acoustic performance and working hours.",
    planningNote: "Lease and freeholder approval often governs apartment windows. Listed mills and conservation areas add a separate planning check.",
    priorities: ["Read the lease", "Contact building management", "Confirm access method", "Match the façade specification"],
    faqs: [{ question: "Can one apartment replace its windows?", answer: "The lease and façade rules decide whether an individual owner can act. Get written consent before ordering." }, { question: "Are tilt-and-turn windows suitable for flats?", answer: "They can provide inward cleaning access and controlled ventilation. Restrictors, sash size and the existing façade still need review." }],
  },
];

export const guidePages: GuidePage[] = [
  {
    slug: "upvc-window-costs", title: "What affects the cost of uPVC windows?", description: "Understand the choices that shape a uPVC window quote before comparing prices in Manchester.",
    intro: "Window quotes change with size, style, glass, access and finishing work. A single average price hides those differences. Build a clear schedule first, then ask each installer to price the same job.",
    image: "/images/upvc-casement-window.webp", imageAlt: "Close-up of a white uPVC casement window", updated: "20 July 2026", readTime: "7 minute read",
    sections: [
      { heading: "Frame size and opening style", paragraphs: ["Larger frames use more material and heavier glass. Opening panes add hinges, locks and fitting time, while fixed panes need less hardware. Bays, arched heads and coupled frames need extra survey and manufacturing work.", "Sash-style and tilt-and-turn systems use more complex hardware than basic casements. Compare the product and operation you need instead of choosing on headline price."] },
      { heading: "Glass and hardware", paragraphs: ["Safety, acoustic, solar-control, obscure and laminated glass can change the price. Decorative bars and lead patterns add manufacturing steps. The handle, hinge and locking specification also affects cost and service life.", "Ask for the glass build-up and hardware range in writing. A cheap quote that omits these details is hard to compare with a complete one."] },
      { heading: "Access, removal and making good", paragraphs: ["Upper floors, restricted parking, conservatories below the opening and large panes can require extra equipment or labour. Inside, damaged plaster and deep reveals may need trims or repair.", "The quote should state whether it includes removing old frames, waste charges, external sealing, internal trims and decoration. Clarify VAT and payment stages before accepting."] },
    ],
    checklist: ["Count every opening", "Mark fixed and opening panes", "List special glass", "Photograph access issues", "Ask for VAT-inclusive totals", "Compare guarantee terms"],
    faqs: [{ question: "Why do online window prices vary so much?", answer: "Many exclude survey details, fitting, access, glass upgrades or making good. A property-specific written quote gives a sounder comparison." }, { question: "Does replacing more windows reduce the price per window?", answer: "Some setup and travel costs spread across a larger job, but size, style and access still set much of the price." }],
  },
  {
    slug: "planning-permission-for-windows", title: "Do replacement windows need planning permission?", description: "A practical guide to planning permission, conservation areas and Building Regulations for windows in England.",
    intro: "Most houses can replace windows with a similar appearance without a planning application. Listed buildings, conservation controls, flats, new bays and unusual changes need closer checks.",
    image: "/images/manchester-bay-window.webp", imageAlt: "Bay windows on a red-brick Manchester terrace", updated: "20 July 2026", readTime: "8 minute read",
    sections: [
      { heading: "Planning permission and Building Regulations are separate", paragraphs: ["Planning controls the effect of development on the property and its surroundings. Building Regulations set standards for matters such as energy, ventilation and safety. A project can need one, both or neither route depending on the work.", "GOV.UK lists replacement windows and doors as work covered by Building Regulations. A registered competent person can self-certify compliant installation, or you can use building control."] },
      { heading: "Similar replacement windows on a house", paragraphs: ["The Planning Portal says houses do not usually need planning permission for new windows of a similar appearance. Upper-floor side windows face rules on obscure glass and opening height. A new bay window is treated as an extension and may need permission.", "Flats do not receive the same permitted-development rights as houses. Lease terms and freeholder consent add another check even where planning permission is not required."] },
      { heading: "Listed buildings and conservation areas", paragraphs: ["Significant work to a listed building needs listed-building consent. Conservation areas and Article 4 directions can restrict replacement materials, colours and details.", "Manchester City Council advises owners in protected areas to retain original character and consult planning officers before replacing windows. Get advice tied to the exact address before ordering frames."] },
    ],
    checklist: ["Check whether the property is a house or flat", "Search the listed-building register", "Check conservation and Article 4 controls", "Ask the freeholder where relevant", "Confirm the Building Regulations route", "Keep the completion certificate"],
    sources: [
      { label: "Planning Portal: doors and windows", href: "https://www.planningportal.co.uk/permission/common-projects/doors-and-windows/" },
      { label: "GOV.UK: Building Regulations approval", href: "https://www.gov.uk/building-regulations-approval" },
      { label: "Manchester City Council conservation guidance", href: "https://www.manchester.gov.uk/info/511/conservation_areas" },
    ],
    faqs: [{ question: "Does a like-for-like window need permission?", answer: "A similar replacement on a house does not usually need planning permission, but listed status, conservation controls or an Article 4 direction can change the answer." }, { question: "Is a FENSA certificate planning permission?", answer: "No. Competent-person certification deals with Building Regulations compliance, not planning or listed-building consent." }],
  },
  {
    slug: "window-energy-ratings", title: "Window energy ratings and U-values explained", description: "Compare the thermal performance of replacement windows without relying on vague efficiency claims.",
    intro: "Window labels and U-values help you compare products, but only when the figures cover the same thing. Ask for the value for the complete window in the configuration you plan to buy.",
    image: "/images/sash-window-interior.webp", imageAlt: "Double-glazed sash-style windows in a Manchester home", updated: "20 July 2026", readTime: "7 minute read",
    sections: [
      { heading: "Whole-window U-value", paragraphs: ["A U-value measures heat transfer. A lower number indicates less heat passing through the measured element. Whole-window figures include the frame and glass, while centre-pane figures describe the glass alone.", "Frame size, opening sections, spacer bars and glass build-up all affect the result. Request the declared performance for the exact product schedule rather than a best-case brochure figure."] },
      { heading: "Window Energy Ratings", paragraphs: ["A Window Energy Rating combines heat loss, solar gain and air leakage into a banded label. It can make product comparison easier, though orientation, room use and installation still affect comfort in the home.", "Keep a copy of the rating or U-value with the contract. If two installers use different measures, ask them to present comparable whole-window data."] },
      { heading: "Ventilation remains part of the job", paragraphs: ["Tighter windows reduce uncontrolled air leakage. Current Approved Document F guidance requires replacement work to avoid making ventilation less satisfactory.", "GOV.UK confirms that a night-vent position does not count as suitable background ventilation. Existing compliant wall ventilation or another designed solution may change what the window needs."] },
    ],
    checklist: ["Ask for whole-window performance", "Compare the same frame layout", "Record glass coatings and spacers", "Confirm trickle or wall ventilation", "Keep certification with house records"],
    sources: [
      { label: "GOV.UK: Approved Document L", href: "https://www.gov.uk/government/publications/approved-document-l-2026" },
      { label: "GOV.UK: Approved Document F FAQs", href: "https://www.gov.uk/guidance/approved-document-f-volume-1-dwellings-frequently-asked-questions" },
    ],
    faqs: [{ question: "Is a lower U-value better?", answer: "Yes, when figures use the same method and cover the same element. Compare whole-window values rather than mixing glass-only and complete-window figures." }, { question: "Do energy-efficient windows need trickle vents?", answer: "The ventilation design must meet current requirements. The correct solution depends on existing ventilation and the work proposed." }],
  },
  {
    slug: "compare-window-quotes", title: "How to compare window quotes", description: "Use a practical checklist to compare window specifications, fitting, guarantees and total cost.",
    intro: "Two totals tell you little if the installers priced different glass, hardware or finishing work. Ask for a room-by-room schedule and compare each line before focusing on the final number.",
    image: "/images/manchester-bay-window.webp", imageAlt: "Detailed bay window installation on a brick home", updated: "20 July 2026", readTime: "6 minute read",
    sections: [
      { heading: "Make the product schedule match", paragraphs: ["List every window, opening direction, frame colour, glass type and ventilator. Mark safety glass, obscure glass and escape openings. Give the same schedule to each company.", "Ask for drawings where the pane layout matters. Bays and front elevations deserve a visual check before manufacture."] },
      { heading: "Read the fitting scope", paragraphs: ["Confirm removal, disposal, external sealing, internal trims, plaster repairs and decoration. Ask who moves blinds, alarms or furniture and whether access equipment appears in the total.", "The survey should identify known masonry, lintel or sill concerns. Allowances and exclusions belong in the written quote."] },
      { heading: "Check payment and cover", paragraphs: ["Compare deposits, stage payments, cancellation terms, expected lead time and the process for snagging. Read product and workmanship guarantees separately.", "Confirm the Building Regulations certification route and any insurance-backed cover before work begins. Keep the contract, schedule and completion documents together."] },
    ],
    checklist: ["Same windows and openings", "Same glass specification", "Hardware named", "Ventilation stated", "Fitting scope complete", "VAT shown", "Payment stages clear", "Certification route confirmed"],
    faqs: [{ question: "Should I choose the cheapest quote?", answer: "Choose after comparing the specification, fitting scope, company checks and payment terms. A lower total may exclude work included elsewhere." }, { question: "How many quotes should I get?", answer: "Enough to compare approach and specification without losing track of the details. Use one written schedule for each conversation." }],
  },
  {
    slug: "condensation-and-misted-windows", title: "Condensation, misted panes and failed double glazing", description: "Identify where window condensation forms and decide whether you need ventilation, repair or replacement.",
    intro: "The position of the moisture gives the first clue. Water on the room-side glass points toward indoor humidity and a cold surface. Mist trapped between panes usually indicates a failed sealed unit.",
    image: "/images/tilt-turn-window.webp", imageAlt: "Open tilt window providing controlled room ventilation", updated: "20 July 2026", readTime: "6 minute read",
    sections: [
      { heading: "Moisture on the inside face", paragraphs: ["Cooking, showering, drying clothes and breathing add water vapour to indoor air. Moisture condenses on a cold pane when the surface drops below the dew point.", "Use extract fans, background ventilation and steady heating as intended. Wipe persistent water from frames and sills while you investigate the cause, since repeated wetting can damage finishes and encourage mould."] },
      { heading: "Mist between the panes", paragraphs: ["A failed edge seal can let moisture enter the cavity of a double-glazed unit. Cleaning will not reach condensation trapped between panes.", "If the frame and hardware remain sound, a glazier may replace only the sealed unit. Ask them to inspect drainage and glazing packers so the new unit does not inherit an avoidable problem."] },
      { heading: "Condensation after window replacement", paragraphs: ["New frames can cut uncontrolled draughts. If the home relied on those gaps for air change, humidity can rise after installation.", "The installer should assess existing ventilation and specify a compliant solution. A homeowner disclaimer does not replace the ventilation requirements in Building Regulations guidance."] },
    ],
    checklist: ["Note which glass surface is wet", "Check extract fans", "Open background vents", "Inspect seals and drainage", "Ask whether the unit or full frame has failed"],
    sources: [{ label: "GOV.UK: Approved Document F FAQs", href: "https://www.gov.uk/guidance/approved-document-f-volume-1-dwellings-frequently-asked-questions" }],
    faqs: [{ question: "Can misted double glazing be repaired?", answer: "A glazier can often replace the sealed glass unit while keeping a sound frame." }, { question: "Will new windows remove all condensation?", answer: "They may warm the inner glass surface, but indoor humidity and ventilation still control much of the condensation risk." }],
  },
];

export function getService(slug: string) { return servicePages.find((page) => page.slug === slug); }
export function getArea(slug: string) { return areaPages.find((page) => page.slug === slug); }
export function getGuide(slug: string) { return guidePages.find((page) => page.slug === slug); }
