import { getCachedProfiles, getProfile } from "@/actions/corporation/Profile"
import { notFound } from "next/navigation"

export default async function Page() {
    const data = JSON.parse(JSON.stringify(await getCachedProfiles()))

    if (!data) {
        notFound()
    }

    return <div>
        {
            data.map((p: any) => (
                <div key={p._id}>
                    <h2>{p.name}</h2>
                    <p>{p.description}</p>
                </div>
            ))
        }
    </div>
}