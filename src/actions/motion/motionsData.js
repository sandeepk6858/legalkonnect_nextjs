// "use server"
// import { user_token } from '@/components/utils/helper/helper';
// import { revalidatePath } from 'next/cache'
// import axios from 'axios';
// import { getMotions } from './filterService';

// export default async function fetchMotionsData(req, res) {
//     const { search, sort, location, country, state, county, specialization_id, award } = req.query;

//     try {
//         const motions = await getMotions({
//             specialization_id,
//             location,
//             search
//         });
//         res.status(200).json(motions);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Failed to fetch motions' });
//     }
// }
