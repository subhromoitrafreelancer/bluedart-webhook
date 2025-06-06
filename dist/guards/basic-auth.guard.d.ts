import { CanActivate, ExecutionContext } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
export declare class BasicAuthGuard implements CanActivate {
    private configService;
    constructor(configService: ConfigService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
