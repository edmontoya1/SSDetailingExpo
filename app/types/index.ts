export type ServiceCardProps = {
  title: string;
  imageUrl: string;
};

export type UserRole = "ADMIN" | "USER"; // Adjust according to your actual roles

export type User = {
  id: number;
  username: string;
  password: string;
  email: string;
  fullName: string;
  phoneNumber: string | null; // Nullable if phone number is optional
  userRole: UserRole; // Enum for user roles
  appointments: Appointment[]; // A list of appointments related to this user
  createdAt: string; // ISO 8601 string (representing LocalDateTime)
  updatedAt: string | null; // ISO 8601 string or null (can be null if not updated)
};

export type Service = {
  id: number;
  name: string;
  description: string | null; // Nullable if the description is optional
  duration: number; // Duration in minutes
  price: number; // Price in the appropriate currency
  appointments: Appointment[]; // A list of appointments related to this service
  createdAt: string; // ISO 8601 string (representing LocalDateTime)
  updatedAt: string | null; // ISO 8601 string or null (can be null if not updated)
};

export type AppointmentStatus = "PENDING" | "COMPLETED" | "CANCELLED";

export type Appointment = {
  id: number;
  user: User;
  service: Service;
  appointmentDate: string; // ISO 8601 string (representing LocalDateTime)
  status: AppointmentStatus;
  createdAt: string; // ISO 8601 string (representing LocalDateTime)
  updatedAt: string | null; // ISO 8601 string or null (can be null on update)
};

export type DaysOfWeek =
  | "MONDAY"
  | "TUESDAY"
  | "WEDNESDAY"
  | "THURSDAY"
  | "FRIDAY"
  | "SATURDAY"
  | "SUNDAY";

export type Availability = {
  id: number;
  serviceProviderId: number;
  dayOfWeek: DaysOfWeek;
  startTime: string; // ISO 8601 string (representing LocalDateTime)
  endTime: string; // ISO 8601 string (representing LocalDateTime)
  createdAt: string; // ISO 8601 string (representing LocalDateTime)
  updatedAt: string | null; // ISO 8601 string or null (can be null if not updated)
};

export const exampleAvailability: Availability = {
  id: 1,
  serviceProviderId: 123,
  dayOfWeek: "MONDAY", // Enum value
  startTime: "2025-02-01T09:00:00", // Date as a string in ISO format
  endTime: "2025-02-01T17:00:00",
  createdAt: "2025-01-30T08:00:00",
  updatedAt: null, // Not updated yet
};

export const exampleAppointment: Appointment = {
  id: 1,
  user: {
    id: 1,
    username: "john_doe",
    email: "john@example.com",
    password: "",
    fullName: "",
    phoneNumber: null,
    userRole: "USER",
    appointments: [],
    createdAt: "",
    updatedAt: null,
  },
  service: {
    id: 1,
    name: "Haircut",
    description: "A haircut service",
    duration: 60,
    price: 120,
    appointments: [],
    createdAt: "",
    updatedAt: null,
  },
  appointmentDate: "2025-02-01T10:00:00", // Date as a string in ISO format
  status: "PENDING",
  createdAt: "2025-02-01T08:00:00",
  updatedAt: null, // Not updated yet
};

export const exampleService: Service = {
  id: 1,
  name: "Haircut",
  description: "A standard haircut service.",
  duration: 30, // Duration in minutes
  price: 25.99, // Price in the appropriate currency (e.g., USD)
  appointments: [], // An array of Appointment objects, could be empty initially
  createdAt: "2025-01-30T08:00:00",
  updatedAt: null, // Not updated yet
};

export const exampleUser: User = {
  id: 1,
  username: "john_doe",
  password: "hashedpassword", // In a real app, make sure this is securely hashed
  email: "john@example.com",
  fullName: "John Doe",
  phoneNumber: null, // Optional field, could be null
  userRole: "USER", // Enum value
  appointments: [], // An array of Appointment objects, could be empty initially
  createdAt: "2025-02-01T08:00:00", // ISO 8601 formatted string
  updatedAt: null, // Not updated yet
};
