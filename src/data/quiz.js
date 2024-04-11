import { post } from "./api.js";

const endpoints = {
    create: '/classes/Quiz',
};

export async function createQuiz(quizData) {
    const result = await post(endpoints.create, quizData);
    return result;
}