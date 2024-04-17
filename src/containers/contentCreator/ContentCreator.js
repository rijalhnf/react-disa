import { Flex } from 'antd';
import { useState, useEffect } from 'react';
import "./ContentCreator.css"

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

const data = {
    "events": [
        {
            "name": "Portfolio 1",
            "date": "12 Maret 2021",
            "keteranganparagrafsatu": "Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting. Lorem Ipsum telah menjadi standar contoh teks sejak tahun 1500an, saat seorang tukang cetak yang tidak dikenal mengambil sebuah kumpulan teks dan mengacaknya untuk menjadi sebuah buku contoh huruf.",
            "keteranganparagrafdua": "Ia mulai dipopulerkan pada tahun 1960 dengan diluncurkannya lembaran-lembaran Letraset yang menggunakan kalimat-kalimat dari Lorem Ipsum, dan seiring munculnya perangkat lunak Desktop Publishing seperti Aldus PageMaker juga memiliki versi Lorem Ipsum.",
            "link": "https://www.youtube.com/embed/pBKCxhT3PUE?si=C660E1gK-q0tS86K",
        },
        {
            "name": "Portfolio 2",
            "date": "26 Mei 2022",
            "keteranganparagrafsatu": "Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting. Lorem Ipsum telah menjadi standar contoh teks sejak tahun 1500an, saat seorang tukang cetak yang tidak dikenal mengambil sebuah kumpulan teks dan mengacaknya untuk menjadi sebuah buku contoh huruf.",
            "keteranganparagrafdua": "Ia mulai dipopulerkan pada tahun 1960 dengan diluncurkannya lembaran-lembaran Letraset yang menggunakan kalimat-kalimat dari Lorem Ipsum, dan seiring munculnya perangkat lunak Desktop Publishing seperti Aldus PageMaker juga memiliki versi Lorem Ipsum.",
            "link": "https://www.youtube.com/embed/pBKCxhT3PUE?si=C660E1gK-q0tS86K",
        },
        {
            "name": "Portfolio 3",
            "date": "28 Mei 2022",
            "keteranganparagrafsatu": "Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting. Lorem Ipsum telah menjadi standar contoh teks sejak tahun 1500an, saat seorang tukang cetak yang tidak dikenal mengambil sebuah kumpulan teks dan mengacaknya untuk menjadi sebuah buku contoh huruf.",
            "keteranganparagrafdua": "Ia mulai dipopulerkan pada tahun 1960 dengan diluncurkannya lembaran-lembaran Letraset yang menggunakan kalimat-kalimat dari Lorem Ipsum, dan seiring munculnya perangkat lunak Desktop Publishing seperti Aldus PageMaker juga memiliki versi Lorem Ipsum.",
            "link": "https://www.youtube.com/embed/pBKCxhT3PUE?si=C660E1gK-q0tS86K",
        },
        {
            "name": "Portfolio 4",
            "date": "14 Oktober 2023",
            "keteranganparagrafsatu": "Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting. Lorem Ipsum telah menjadi standar contoh teks sejak tahun 1500an, saat seorang tukang cetak yang tidak dikenal mengambil sebuah kumpulan teks dan mengacaknya untuk menjadi sebuah buku contoh huruf.",
            "keteranganparagrafdua": "Ia mulai dipopulerkan pada tahun 1960 dengan diluncurkannya lembaran-lembaran Letraset yang menggunakan kalimat-kalimat dari Lorem Ipsum, dan seiring munculnya perangkat lunak Desktop Publishing seperti Aldus PageMaker juga memiliki versi Lorem Ipsum.",
            "link": "https://www.youtube.com/embed/pBKCxhT3PUE?si=C660E1gK-q0tS86K",
        },
    ]
}

// function Kotak({ judul, isi, tanggal, children }) {
//     return (
//         <div style={{ textAlign: "center", marginTop: "10px" }}>
//             <div className="youtube-box">
//                 {children}
//                 <div
//                     align="center"
//                     justify='flex-start'
//                     style={{ padding: 25 }}>

//                     <p>
//                         <span style={{ fontSize: "22px", fontWeight: "bold" }}>{judul}</span>
//                         <br />
//                         {tanggal}
//                         <br />
//                         {isi}
//                     </p>

//                 </div>
//             </div>
//         </div>
//     )
// }



function Frame({ src }) {
    const { width } = useWindowDimensions();
    const [widthAdapt, setWidthAdapt] = useState("");
    const [heightAdapt, setHeightAdapt] = useState("");

    // if (width < 453) setWidthAdapt("360")

    useEffect(() => {
        if (width > 820) {
            setWidthAdapt("800");
            setHeightAdapt("450");
        } else if (width > 413 && width < 820) {
            setWidthAdapt(width - 40);
            setHeightAdapt((width - 40) / 2);
        } else {
            setWidthAdapt("360");
            setHeightAdapt("202");
        }
    }, [width]);

    return (
        <>
            <iframe width={widthAdapt} height={heightAdapt} src={src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen style={{ borderRadius: "10px 10px 0px 0px" }}></iframe>
            <br />
            {/* <div>
                width: {width} ~ height: {height}
            </div> */}
        </>
    )
}

function ContentCreator() {
    return (
        <div style={{ marginLeft: "20px", marginRight: "20px" }}>

            {/* <h1 className="header-title" style={{ textAlign: "center", marginBottom: "10px" }}> Portfolio Desain & Video.</h1>

            <div style={{ textAlign: "center", display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: "10px", marginBottom: "10px" }}>
                <div className="project-box">
                    <span className="white-text center-text">🎨 Create something out of anything</span>
                    <p className="gray-text text-box">
                        A content creator crafts engaging and informative material across various mediums, fostering connections, sparking conversations, and inspiring audiences with their creativity and insights.
                    </p>
                </div>
            </div> */}

            <section id="about" className="container container-about">
                <div className="about-left">
                    <span className="purple-text center-text">
                        💼 Portfolio{" "}
                        <span className="purple-smoke-text">- Data Engineering/Management</span>{" "}
                    </span>
                    <p className="gray-text center-text">
                        "Berikut kumpulan portfolio yang pernah saya kerjakan"{" "}
                    </p>
                </div>
            </section>

            <Flex wrap="wrap" gap="middle" justify='center' style={{ paddingBottom: "20px" }}>

                {data.events.map((event) =>

                    <div style={{ textAlign: "center", marginTop: "10px" }}>
                        <div className="youtube-box">
                            <Frame src={event.link} />
                            <div
                                align="center"
                                justify='flex-start'
                                style={{ padding: 25 }}>

                                <p className="white-text left-text">
                                    {/* <h1 className="header-title-portfolio">{event.name}</h1> */}
                                    <span className="purple-text" style={{ fontSize: "30px", fontWeight: "bold" }}>{event.name}</span>
                                    <br />
                                    {event.date}
                                    <br />
                                    <br />
                                    {event.keteranganparagrafsatu}
                                    <br />
                                    <br />
                                    {event.keteranganparagrafdua}
                                </p>

                            </div>
                        </div>
                    </div>
                )
                }

                {/* <Kotak judul="Apa itu Just-In-Time?" isi="------" tanggal="12 oktober 2022">
                    <Frame src="https://www.youtube.com/embed/pBKCxhT3PUE?si=C660E1gK-q0tS86K" />
                </Kotak>

                <Kotak judul="Capacity Building BKLI 2019" isi="------">
                    <Frame src="https://www.youtube.com/embed/S8WCSoU5eEs?si=6vV3ptJ7IgiXMh1E" />
                </Kotak>

                <Kotak judul="Cebics Camp 2019" isi="------">
                    <Frame src="https://www.youtube.com/embed/nb12kq0Qbck?si=IFlAIu-3-u2_90oj" />
                </Kotak>

                <Kotak judul="Motion Graphics: Introducing seaport" isi="------">
                    <Frame src="https://www.youtube.com/embed/ZxjGDQNHDqY?si=Sde5j7-oZtQBroTg" />
                </Kotak> */}


            </Flex>
            {/* <div className='footer' style={{ height: "20px" }}></div> */}
        </div>

    )
}

export default ContentCreator
