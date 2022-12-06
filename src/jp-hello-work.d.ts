type PostalKey = { [zip: string]: string[] }
type HelloWorkKey = { [hellowork: string]: PostalKey }
type City = {
    code: string;
};
type Address = {
    code: string;
    city: City;
};
export declare class HelloWork {
    address: Address;
    name: string[];
    private constructor();
    static byZipCode(zipcode: string | number): HelloWork;
    private getName: string[];
    private nameSearcher(loaders: HelloWorkKey[]): string[];
}
