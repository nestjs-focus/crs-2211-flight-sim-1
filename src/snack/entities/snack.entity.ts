export class SnackEntity {
    id: number;
    type: SnackType;
    price: number;
    isInMachine: boolean;
}

export enum SnackType {
    DRINK = 'DRINK',
    BARS = 'BARS',
    CHIPS = 'CHIPS'

}
