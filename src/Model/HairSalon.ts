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

type ServiceCategory = 'Hair Cut' | 'Hair Perm' | 'Coloring' | 'Treatment' | 'Hair Extension' | 'Hair Styling';

type HairCutCategory = 'Kids Hair Cut' | 'Men Hair Cut' | 'Women Hair Cut';
type HairPermCategory = 'Men Hair Perm' | 'Men Heat Perm' | 'Men Magic Straight Perm' | 'Women Hair Perm' | 'Women Heat Perm' | 'Women Magic Straight Perm';
type HairColorCategory = 'Men\'s Coloring' | 'Women\'s Coloring' | 'Color Refresh' | 'Ombre';
type HairTreatmentCategory = 'Men Hair Treatment' | 'Women Hair Treatment';
type HairStylingCategory = 'Shampoo & Blowout' | 'Curl' | 'Straightening' | 'Special Occasion' |'Bridal';

type SubCategory = HairCutCategory | HairPermCategory | HairColorCategory | HairTreatmentCategory | 'Hair Extension' | HairStylingCategory;


export type Service = {
    id: string;
    category: ServiceCategory;
    subCategory: SubCategory;
    description: string;
    price: string;
}

export type ServiceOnly = Pick<HairSalon, 'services'>