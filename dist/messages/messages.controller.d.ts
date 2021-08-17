import { MessagesService } from './messages.service';
import { MessageDto } from './dto/Message.dto';
export declare class MessagesController {
    private readonly messagesService;
    constructor(messagesService: MessagesService);
    create(createMessageDto: MessageDto): Promise<import("./entities/message.entity").Message>;
    findAll(): Promise<import("./entities/message.entity").Message[]>;
    findOne(id: string): Promise<import("./entities/message.entity").Message>;
    update(id: string, updateMessageDto: MessageDto): Promise<import("./entities/message.entity").Message>;
    remove(id: string): Promise<void>;
}
