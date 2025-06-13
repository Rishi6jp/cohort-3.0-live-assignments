export const Age = () => {
    return <div className="bg-green-300 h-max-full place-content-center justify-center content-center place-item-center">
        <div className="flex ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            <div className="flex"><h2>Webinar</h2><h2>.gg</h2></div>
        </div>
        <div>
            <h2>Verify Your Age</h2>
        </div>
        <div>
            <p>Please confirm your Birth year. This data will not be shared</p>
            <input type="text" placeholder="Your Birth Year"/>
            <button>Continue</button>
        </div>
    </div>
}