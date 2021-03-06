import {
	ICredentialType,
	NodePropertyTypes,
} from 'n8n-workflow';

export class TheHiveApi implements ICredentialType {
	name = 'theHiveApi';
	displayName = 'The Hive API';
	documentationUrl = 'theHive';
	properties = [
		{
			displayName: 'API Key',
			name: 'ApiKey',
			type: 'string' as NodePropertyTypes,
			default: '',
		},
		{
			displayName: 'URL',
			name: 'url',
			default: '',
			type: 'string' as NodePropertyTypes,
			description: 'The URL of TheHive instance',
			placeholder: 'https://localhost:9000',
		},
		{
			displayName: 'API Version',
			name: 'apiVersion',
			default: '',
			type: 'options' as NodePropertyTypes,
			description: 'The version of api to be used',
			options: [
				{
					name: 'Version 1',
					value: 'v1',
					description: 'API version supported by TheHive 4',
				},
				{
					name: 'Version 0',
					value: '',
					description: 'API version supported by TheHive 3',
				},
			],
		},
		{
			displayName: 'Ignore SSL Issues',
			name: 'allowUnauthorizedCerts',
			type: 'boolean' as NodePropertyTypes,
			default: false,
		},
	];
}
