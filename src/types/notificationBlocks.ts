export interface TextBlock {
	type: string;
	text: string;
}

export interface NotificationBlock {
	type: string;
	fields?: TextBlock[];
	text?: string | TextBlock;
}
