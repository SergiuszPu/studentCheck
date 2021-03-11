import { Base } from './base.model';

export interface Subject extends Base
{
  id: string;
  subject: string;
  result: string;
}
