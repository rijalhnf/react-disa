import { Card, Flex, Image } from 'antd';
import "./Calendar.css"
import lamaran from '../../images/calendar/lamaran.jpg'
import ultah from '../../images/calendar/ultah.jpg'
import akad from '../../images/calendar/akad.jpg'
import resepsi from '../../images/calendar/resepsi.jpg'
import imageloading from '../../images/imageloading.png'

const data = {
    "events": [
        {
            "name": "Portfolio 1",
            "date": "12 Maret 2023",
            "keterangan": "The day I proposed, I was a nervous wreck! Your 'Yes' made my heart dance.",
            "image": lamaran,
        },
        {
            "name": "Portfolio 2",
            "date": "26 Mei 1999",
            "keterangan": "Your birthday is my favorite holiday. Let's dance under the stars!",
            "image": ultah,
        },
        {
            "name": "Portfolio 3",
            "date": "28 Mei 2023",
            "keterangan": "Promised to be ur partner in crime, your shoulder to lean on, and your personal comedian.",
            "image": akad,
        },
        {
            "name": "Portfolio 4",
            "date": "14 Oktober 2023",
            "keterangan": "Laughter, love, and a few embarrassing dance moves!",
            "image": resepsi,
        },
    ]
}

function Calendar() {
    return (
        <div style={{ marginTop: "0px", paddingBottom: "40px", marginLeft: "20px", marginRight: "20px", justifyContent: "center" }}>

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


            {data.events.map((event) =>
                <Card
                    className='custom-box'
                    styles={{ body: { padding: 0, overflow: 'hidden' } }}
                    key={event.name}>
                    <Flex>
                        <Image
                            alt="gambar"
                            src={event.image}
                            preview={imageloading}
                            style={{ display: 'block', width: "200px", height: "270px", borderRadius: "10px 0px 0px" }} />
                        <Flex
                            align="center"
                            justify='flex-start'
                            style={{ padding: 25 }}>

                            <p>
                                <span style={{ fontSize: "22px", fontWeight: "bold" }}>{event.name}</span>
                                <br />
                                {event.date}
                                <br />
                                {event.keterangan}
                            </p>

                        </Flex>
                    </Flex>
                </Card>)
            }
        </div >
    )
}

export default Calendar
