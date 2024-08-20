import { UniqueEntityId } from '../../../../core/entities/unique-entity-id'
import { Answer } from '../../enterprise/entities/answer'
import { AnswersRepository } from '../repositories/answers-repository'

interface AnswerQuestionuseCaseRequest {
  instructorId: string
  questionId: string
  content: string
}

interface AnswerQuestionuseCaseResponse {
  answer: Answer
}

export class AnswerQuestionUseCase {
  constructor(private answersRepository: AnswersRepository) {}

  async execute({
    instructorId,
    questionId,
    content,
  }: AnswerQuestionuseCaseRequest): Promise<AnswerQuestionuseCaseResponse> {
    const answer = Answer.create({
      content,
      authorId: new UniqueEntityId(instructorId),
      questionId: new UniqueEntityId(questionId),
    })

    await this.answersRepository.create(answer)

    return {
      answer,
    }
  }
}
