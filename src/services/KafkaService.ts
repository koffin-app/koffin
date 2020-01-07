import {Admin, Kafka} from "kafkajs";
const uuid1 = require('uuid/v1');

export class KafkaService {
  private kafka: Kafka;

  public constructor(brokers: string[]) {
    this.kafka = new Kafka({
      clientId: uuid1(),
      brokers: brokers
    });
  }

  public async publish(topic: string, key: string, value: string) {
    const producer = this.kafka.producer();
    await producer.connect();
    await producer.send({
      topic: topic,
      messages: [{
        key: key,
        value: value,
      }]
    }).then(result => {
      // Add store refresh here so that the view updates
    });
    await producer.disconnect();
  }

  public async getTopicMetadata(topic: string) {
    const admin = this.kafka.admin();
    await admin.connect();
    await admin.fetchTopicMetadata({topics: [topic]}).then(metadata => {
      // Add store update here
    });
    await admin.disconnect();
  }

  public async getTopicsMetadata() {
    const admin = this.kafka.admin();
    await admin.connect();
    // @ts-ignore
    await admin.fetchTopicMetadata().then(metadata => {
      // Add store update here
    });
    await admin.disconnect();
  }
}