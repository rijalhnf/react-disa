import { Card, Image, Row, Col } from 'antd';

import gambarPortfolio1 from "../../images/gambar-portfolio1.png";
import gambarPortfolio2 from "../../images/gambar-portfolio2.png";
import gambarPortfolio3 from "../../images/gambar-portfolio3.png";
import gambarPortfolio4 from "../../images/gambar-portfolio4.png";
import imageloading from "../../images/imageloading.png";


const data = {
    "portofolios": [
        {
            "name": "Customer Data Pipeline",
            "keterangan": "Designed and implemented a scalable ETL pipeline to ingest, validate and enrich customer events using Apache Airflow and Spark. Reduced data latency from 6 hours to under 15 minutes and improved downstream report freshness.",
            "image": gambarPortfolio1,
        },
        {
            "name": "Billing Data Warehouse Migration",
            "keterangan": "Led migration of legacy billing datasets to a Snowflake-based warehouse. Modeled star schema, implemented dbt transforms, and established automated CI pipelines for deployments and data quality checks.",
            "image": gambarPortfolio2,
        },
        {
            "name": "Real-time Analytics Platform",
            "keterangan": "Built a real-time analytics stack using Kafka, ksqlDB and a lightweight analytics API to surface KPIs with sub-minute freshness for product teams.",
            "image": gambarPortfolio3,
        },
        {
            "name": "Data Ops & Observability",
            "keterangan": "Introduced monitoring, alerting and SLA tracking for critical pipelines using Prometheus and Grafana; reduced incident time-to-resolution and improved reliability.",
            "image": gambarPortfolio4,
        },
    ]
}


export default function Portfolio() {
    return (
        <div style={{ paddingBottom: "40px", maxWidth: "1600px", marginInline: "auto", paddingInline: "40px", marginTop: "50px" }}>

            <section id="about" className="container container-about">
                <div className="about-left">
                    <span className="purple-text center-text">
                        💼 Portofolio{" "}
                        <span className="purple-smoke-text">- Data Engineering/Management</span>{" "}
                    </span>
                    {/* <p className="gray-text center-text">
                        "Berikut kumpulan portfolio yang pernah saya kerjakan"{" "}
                    </p> */}
                </div>
            </section>

            {/* Grid layout starts here, Flex removed */}

            <Row gutter={[24, 24]} justify="center">
                {data.portofolios.map((portofolio) => (
                    <Col xs={24} sm={12} md={12} lg={12} key={portofolio.name}>
                        <Card
                            className='custom-box'
                            bodyStyle={{ padding: 0, overflow: 'hidden', minHeight: 440, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}
                            style={{ height: 470 }}
                        >
                            <Image
                                src={portofolio.image}
                                preview={imageloading}
                                style={{ width: "100%", height: "300px", objectFit: "cover", borderRadius: "10px 10px 0 0" }}
                            />
                            <div style={{ padding: 20, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <span style={{ fontSize: "22px", fontWeight: "bold" }} className='purple-text'>{portofolio.name}</span>
                                <p style={{ marginTop: 10 }} className='gray-text'>{portofolio.keterangan}</p>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>

        </div>
    )
}