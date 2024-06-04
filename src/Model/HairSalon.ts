export type HairSalon = {
    name: string;
    address: Address;
    phoneNumber: string;
    instagram: string;
    services: Service[];
}

export type Address = {
    streetNumber: string;
    unitNumber?: string;
    city: string;
    province: string;
    zipCode: string;
}

type ServiceCategory = 'Hair Cut' | 'Hair Perm' | 'Coloring' | 'Treatment' | 'Hair Extension';

type HairCutCategory = 'Kids Hair Cut' | 'Men Hair Cut' | 'Women Hair Cut';
type HairPermCategory = 'Men Hair Perm' | 'Men Heat Perm' | 'Men Magic Straight Perm' | 'Women Hair Perm' | 'Women Heat Perm' | 'Women Magic Straight Perm';
type HairColorCategory = 'Men Hair Color' | 'Women Hair Color';
type HairTreatmentCategory = 'Men Hair Treatment' | 'Women Hair Treatment';

type SubCategory = HairCutCategory | HairPermCategory | HairColorCategory | HairTreatmentCategory | 'Hair Extension';


export type Service = {
    id: string;
    category: ServiceCategory;
    subCategory: SubCategory;
    description: string;
    price: string;
}

export type ServiceOnly = Pick<HairSalon, 'services'>