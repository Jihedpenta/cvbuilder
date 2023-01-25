
export const getColor = (industry)=>{
    const primary_color = industry === 'energy' ?
    '#CC3333 ' :
     industry === 'telecom' ?
        '#723893' :
         industry === 'transport' ?
            '#009966' :
             industry === 'oilgas' ?
                '#D69B18' :
                '#245097'
            return primary_color;
}

export const getLogoUrl = (industry)=> {
    const logo_folder = '/images/pentabell_logos/';
    const logo_link = industry === 'energy' ?
        logo_folder + 'energy.png' :
        industry === 'telecom' ?
            logo_folder + 'telecom.png' :
            industry === 'transport' ?
                logo_folder + 'transport.png' :
                industry === 'oilgas' ?
                    logo_folder + 'oilgas.png' :
                    logo_folder + 'other.png'
    return logo_link;
}

// export const initilizeRefs= ()=>{
//     const containerRef = useRef(null);
//     const headerRef = useRef(null);
//     const topPageRef = useRef(null);
//     const summaryRef = useRef(null);
//     const educationRef = useRef(null);
//     const certifRef = useRef(null);
//     const workExpRef = useRef(null);
//     const projectRef = useRef(null);
//     const skillRef = useRef(null);
//     const toolRef = useRef(null);
//     const langRef = useRef(null);
//     return {containerRef}
// }