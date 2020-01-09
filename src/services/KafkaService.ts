import {Kafka} from "kafkajs";
const uuid1 = require('uuid/v1');

export class KafkaService {
  private kafka: Kafka;

  public constructor(brokers: string[]) {
    this.kafka = new Kafka({
      clientId: uuid1(),
      brokers: brokers
    });
  }

  public async publish(topic: string, key: string, value: string, onSuccess) {
    const producer = this.kafka.producer();
    await producer.connect();
    await producer.send({
      topic: topic,
      messages: [{
        key: key,
        value: value,
      }]
    }).then(success => {
      onSuccess(success.pop())
    });
    await producer.disconnect();
  }

  public async getTopicMetadata(topic: string, onSuccess) {
    const admin = this.kafka.admin();
    await admin.connect();
    await admin.fetchTopicMetadata({topics: [topic]}).then(success => {
      onSuccess(success.topics.pop())
    });
    await admin.disconnect();
  }

  public async getTopics(onSuccess) {
    const admin = this.kafka.admin();
    await admin.connect();
    // @ts-ignore
    await admin.fetchTopicMetadata().then(success => {
      onSuccess(success.map(metadata => metadata.name))
    });
    await admin.disconnect();
  }
}