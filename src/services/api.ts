import { faker } from '@faker-js/faker';
import { Message } from '../modeles/Message';

const delay = (time: number) => {
    return new Promise(resolve => setTimeout(resolve, time));
}

export const createUser = (id: number) => ({
    id,
    name: faker.person.fullName(),
    avatar: faker.image.avatar(),
});

export const createMessage = (id: number, userId: number, msg: string): Message => ({
    id,
    userId: userId,
    msg: msg,
    date: faker.date.anytime(),
});

export async function getUsers() {
    const usersId = Array.from(Array(20).keys());

    await delay(500);

    return usersId.map(createUser);
}

export async function getMessages(contactId: number): Promise<Message[]> {
    const numberOfMesg = 20;
    const msgId = Array.from(Array(numberOfMesg).keys());

    await delay(500);

    return msgId.map(id => <Message>{
        id: id,
        userId: contactId,
        msg: faker.lorem.sentences({min: 1, max: 3}),
        date: faker.date.anytime(),
    });

}