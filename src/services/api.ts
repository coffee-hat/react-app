import { faker } from '@faker-js/faker';

const delay = (time: number) => {
    return new Promise(resolve => setTimeout(resolve, time));
}

export const createUser = (id: number) => ({
    id,
    name: faker.person.fullName(),
    avatar: faker.image.avatar(),
});

export async function getUsers() {
    const usersId = Array.from(Array(50).keys());

    await delay(500);

    return usersId.map(createUser);
}