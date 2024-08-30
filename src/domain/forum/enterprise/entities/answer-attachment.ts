import { Entity } from 'src/core/entities/entity'
import { UniqueEntityId } from 'src/core/entities/unique-entity-id'

interface AnswerAttachmentProps {
  answerId: UniqueEntityId
  attachmentId: UniqueEntityId
}

export class AnswerAttachment extends Entity<AnswerAttachmentProps> {
  get topicId() {
    return this.props.answerId
  }

  get attachmentId() {
    return this.props.attachmentId
  }

  static create(props: AnswerAttachmentProps, id?: UniqueEntityId) {
    const attachment = new AnswerAttachment(props, id)

    return attachment
  }
}
