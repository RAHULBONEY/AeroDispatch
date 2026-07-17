export type RiderStatus = 'IDLE' | 'EN_ROUTE_TO_PICKUP' | 'DELIVERING' | 'TELEMETRY_LOST';

export interface Rider {
    id: string;
    name: string;
    lat: number;
    lng: number;
    status: RiderStatus;
    currentBatchId?: string;
    speedKmH: number;
}

export interface Order {
    id: string;
    restaurantName: string;
    deliveryAddress: string;
    lat: number;
    lng: number;
    status: 'PENDING' | 'PREPARING' | 'BATCHED' | 'DISPATCHED';
    prepTimeRemaining: number;
    profitMargin: number;
}

export interface DispatchState {
    activeRidersCount: number;
    pendingOrdersCount: number;
    efficiencyRate: number;
}