import { Member, PromotionCard } from "../../promotion/types";

export enum GuestStatus{
    BEFORE_CONFIRMATION = 'BEFORE_CONFIRMATION',
    AFTER_CONFIRMATION = 'AFTER_CONFIRMATION',
    CHECKED_IN ='CHECKED_IN'
}
export interface GuestCardType {
    guestId : number;
    name: string;
    reservationCount : number;
    reservationStatus : GuestStatus;
    depositDate : string;
    writer : Member;
}

export interface TicketCardType {
    promotion : PromotionCard;
    guest : GuestCardType;
}