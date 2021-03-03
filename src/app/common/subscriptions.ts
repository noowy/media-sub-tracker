import { Subscription } from './subscription';

export const SUBSCRIPTIONS: Subscription[] = [
    {
        'id': 0,
        'name': 'Netflix',
        'vendor': 'Netflix',
        'image': '/assets/vendor_logos/netflix.png',
        'subUrl': 'https://www.netflix.com/youraccount',
        'unsubUrl': 'https://www.netflix.com/cancelplan/confirm',
        'available': true,
        'description': ''
    },
    {
        'id': 1,
        'name': 'Prime Video',
        'vendor': 'Amazon',
        'image': '/assets/vendor_logos/amazon_prime.png',
        'subUrl': 'https://www.primevideo.com/settings/ref=atv_nb_set',
        'unsubUrl': 'https://www.primevideo.com/settings/ref=atv_nb_set',
        'available': true,
        'description': ''
    },
    {
        'id': 2,
        'name': 'Apple TV+',
        'vendor': 'Apple',
        'image': '/assets/vendor_logos/apple_tv_plus.png',
        'subUrl': '',
        'unsubUrl': '',
        'available': true,
        'description': ''
    },
    {
        'id': 3,
        'name': 'Hulu',
        'vendor': 'Hulu',
        'image': '/assets/vendor_logos/hulu.png',
        'subUrl': '',
        'unsubUrl': '',
        'available': false,
        'description': ''
    },
    {
        'id': 4,
        'name': 'Disney+',
        'vendor': 'Disney',
        'image': '/assets/vendor_logos/disney_plus.png',
        'subUrl': '',
        'unsubUrl': '',
        'available': false,
        'description': ''
    },
    {
        'id': 5,
        'name': 'HBO+',
        'vendor': 'HBO',
        'image': '/assets/vendor_logos/hbo_plus.png',
        'subUrl': '',
        'unsubUrl': '',
        'available': false,
        'description': ''
    }
]