import { MessageDto } from './dto/Message.dto';
import { Message } from './entities/message.entity';
export declare class MessagesService {
    private messages;
    create(messageDto: MessageDto): Promise<Message>;
    findAll(): Promise<Message[]>;
    findOne(id: number): Promise<Message>;
    update(id: number, messageDto: MessageDto): Promise<Message>;
    remove(id: number): Promise<void>;
}
