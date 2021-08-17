"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesService = void 0;
const common_1 = require("@nestjs/common");
let MessagesService = class MessagesService {
    constructor() {
        this.messages = [];
    }
    async create(messageDto) {
        const message = Object.assign({ id: this.messages.length }, messageDto);
        this.messages.push(message);
        return message;
    }
    async findAll() {
        return this.messages;
    }
    async findOne(id) {
        const message = this.messages.find((msg) => msg.id === id);
        if (!message) {
            throw new common_1.NotFoundException(`Mensagem com ID ${id} não encontrado`);
        }
        return message;
    }
    async update(id, messageDto) {
        const index = this.messages.findIndex((message) => message.id === id);
        if (index < 0) {
            throw new common_1.NotFoundException(`Mensagem com ID ${id} não encontrado`);
        }
        const msg = Object.assign({ id }, messageDto);
        this.messages[index] = msg;
        return msg;
    }
    async remove(id) {
        const index = this.messages.findIndex((message) => message.id === id);
        if (index < 0) {
            throw new common_1.NotFoundException(`Mensagem com ID ${id} não encontrado`);
        }
        this.messages.splice(index, 1);
    }
};
MessagesService = __decorate([
    common_1.Injectable()
], MessagesService);
exports.MessagesService = MessagesService;
//# sourceMappingURL=messages.service.js.map