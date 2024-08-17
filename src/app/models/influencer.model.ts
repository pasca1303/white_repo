export interface influencer{
	id: number
	name: string
	username:string
	email: string
	address?:{
		street:string,
		suite:string,
		city:string,
		zipcode:string
	}
	phone?: string
	company?: {
		name: string
		
	}
}
