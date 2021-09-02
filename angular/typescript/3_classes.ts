class Server {
    static VERSION = '1.0.3';

    private status: string = 'working';

    constructor(public name: string, protected ip: number) {}

    public turnOn() {
        this.status = 'working';
    }

    public turnOff() {
        this.status = 'offline';
    }

    public getStatus(): string {
        return this.status;
    }
}

const server: Server = new Server ('AWS', 1234);