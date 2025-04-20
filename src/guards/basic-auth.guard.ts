import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class BasicAuthGuard implements CanActivate {
  constructor(private configService: ConfigService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new UnauthorizedException();
    }

    const auth = Buffer.from(authHeader.split(' ')[1], 'base64')
      .toString()
      .split(':');
    
    const [username, password] = auth;
    const environment = this.configService.get<string>('ENVIRONMENT');
    
    const validUsername = this.configService.get<string>(
      environment === 'prod' ? 'PROD_AUTH_USERNAME' : 'UAT_AUTH_USERNAME'
    );
    const validPassword = this.configService.get<string>(
      environment === 'prod' ? 'PROD_AUTH_PASSWORD' : 'UAT_AUTH_PASSWORD'
    );

    if (username === validUsername && password === validPassword) {
      return true;
    }

    throw new UnauthorizedException();
  }
}