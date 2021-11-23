export interface ICompletedStatusPayload {
    status:boolean,
    last4:string|undefined;
    receipt:string;
    createdAt:string;
}