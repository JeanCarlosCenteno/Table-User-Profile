import { AppService } from "./app.service";
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getProducts(): {
        id: number;
        name: string;
    }[];
    createProduct(): {
        id: number;
        name: string;
    };
}
