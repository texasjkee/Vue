export interface Event {
  id?: number;
  name: string;
  date: Date;
  isDone: boolean;
  isPaid: boolean;
  price: number;
}

export interface EventSchema {
  events: Event[];
  loading: boolean;
  success: boolean;
  error: string | undefined;
}

export interface EventAction {
  getAllEvents: () => Promise<void>;
  createEvent: (event: Event) => Promise<void>;
  updateEvent: (event: Event) => Promise<void>;
  deleteEvent: (id: number) => Promise<void>;
  setError: (error: string | undefined) => void;
}
