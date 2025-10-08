import { Flex } from 'antd';
import "./ContentCreator.css"
import gambarPortfolio1 from "../../images/gambar-portfolio1.png";

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


function ContentCreator() {
    return (
        <div style={{ marginLeft: "20px", marginRight: "20px" }}>

            <section id="about" className="container container-about">
                <div className="about-left">
                    <span className="purple-text center-text">
                        💼 Portfolio{" "}
                        <span className="purple-smoke-text">- Data Engineering/Management</span>{" "}
                    </span>
                    {/* <p className="gray-text center-text">
                        "Berikut kumpulan portfolio yang pernah saya kerjakan"{" "}
                    </p> */}
                </div>
            </section>

            <Flex wrap="wrap" gap="large" justify='center' style={{ paddingBottom: "20px" }}>

                {data.events.map((event) =>

                    <div style={{ textAlign: "center", marginTop: "10px" }}>
                        <div className="youtube-box">
                            <img src={gambarPortfolio1} alt="" width={600} style={{ paddingTop: "0px", borderRadius: "15px 15px 0px 0px" }} />

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
