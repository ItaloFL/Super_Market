


export interface ISendMailProvider{

  sendMail(email: string): Promise<void>
}