import { faker } from '@faker-js/faker';

const delay = (time: number) => {
    return new Promise(resolve => setTimeout(resolve, time));
}

export const createUser = (id: number) => ({
    id,
    name: faker.person.fullName(),
    avatar: faker.image.avatar(),
});

export const createMsg = (id: number, userId: number) => ({
    id,
    userId,
    msg: faker.lorem.lines({ min: 1, max: 3 }),
    date: faker.date.anytime(),
});

export async function getUsers() {
    const usersId = Array.from(Array(5).keys());

    await delay(500);

    return usersId.map(createUser);
}

export async function getMessages(numberOfMesg: number) {
    const msgId = Array.from(Array(numberOfMesg).keys());

    await delay(500);

    return msgId.map(createMsg);
}