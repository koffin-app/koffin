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

  public async publish(topic: string, key: string, value: string) {
    const producer = this.kafka.producer();
    await producer.connect();
    await producer.send({
      topic: topic,
      messages: [{
        key: key,
        value: value,
      }]
    });
    await producer.disconnect();
    // Add store update here
  }
}