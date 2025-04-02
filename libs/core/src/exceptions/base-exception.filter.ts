import type { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { Catch, HttpException } from '@nestjs/common';
import type { FastifyReply } from 'fastify';

@Catch(HttpException)
export class BaseExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost): unknown {
    const response = host.switchToHttp().getResponse<FastifyReply>();
    const responseBody = exception.getResponse();
    const status = exception.getStatus() || 500;

    if (typeof responseBody === 'string') {
      return response.status(status).send({
        error: exception.name,
        message: responseBody,
      });
    }

    if ('message' in responseBody && responseBody['message']) {
      const messages = (
        Array.isArray(responseBody['message'])
          ? responseBody['message']
          : [responseBody['message']]
      ) as string[];
      responseBody['message'] = messages.join(', ');
    }

    if ('statusCode' in responseBody) {
      delete responseBody['statusCode'];
    }

    return response.status(status).send(responseBody);
  }
}
