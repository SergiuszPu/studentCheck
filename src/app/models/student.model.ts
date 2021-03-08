import { Base } from './base.model';

export interface Student extends Base
{
  id: string;
  firstname: string;
  lastname: string;
  age: string;
}
