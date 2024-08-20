import { UniqueEntityId } from 'src/core/entities/unique-entity-id'
import { Question } from '../../enterprise/entities/question'
import { QuestionsRepository } from '../repositories/question-repository'

interface CreateQuestionuseCaseRequest {
  authorId: string
  title: string
  content: string
}

interface CreateQuestionuseCaseResponse {
  question: Question
}

export class CreateQuestionUseCase {
  constructor(private questionsRepository: QuestionsRepository) {}

  async execute({
    authorId,
    title,
    content,
  }: CreateQuestionuseCaseRequest): Promise<CreateQuestionuseCaseResponse> {
    const question = Question.create({
      authorId: new UniqueEntityId(authorId),
      title,
      content,
    })

    await this.questionsRepository.create(question)

    return {
      question,
    }
  }
}
