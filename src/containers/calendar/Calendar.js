import { Card, Flex, Typography, Button } from 'antd';

function Calendar() {
    return (
        <div>
            <Card
                hoverable
                style={{ width: "100%" }}
                bodyStyle={{ padding: 0, overflow: 'hidden' }}
            >
                <Flex justify="space-between">
                    <img
                        alt="avatar"
                        src={apiData.item.urlFoto}
                        style={{ display: 'block', width: 320 }}
                    />
                    <Flex
                        vertical
                        align="flex-end"
                        justify="space-between"
                        style={{ padding: 32 }}
                    >
                        <Typography.Title level={5}>
                            <h4>{apiData.item.nmPegawai}</h4>
                            {apiData.item.uraianJabatan}
                            <p>{apiData.item.uraianPangkat} | Grade: {apiData.item.kdPangkat}</p>
                        </Typography.Title>
                        <Button type="primary" href="https://ant.design" target="_blank">
                            Get Started
                        </Button>
                    </Flex>
                </Flex>
            </Card>
        </div>
    )
}

export default Calendar
