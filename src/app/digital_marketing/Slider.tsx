import { InfiniteSlider } from '@/components/ui/infinite-slider';
import Image from 'next/image';

export function InfiniteSliderVertical() {
    return (
        <div className=' h-[1350px] space-x-4 flex flex-col gap-14'>
            <InfiniteSlider direction='horizontal'>
                <Image width={500} height={384} className='w-[200px] h-[133px] rounded-[20px] md:w-[500px] md:h-[384px]' 
                    src='https://i.scdn.co/image/ab67616d00001e02ad24c5e36ddcd1957ad35677'
                    alt='Dean blunt - Black Metal 2'
                />
                <Image width={500} height={384} className='w-[200px] h-[133px] rounded-[20px] md:w-[500px] md:h-[384px]' 
                    src='https://i.scdn.co/image/ab67616d00001e02af73f776b92d4614152fb141'
                    alt='Jungle Jack - JUNGLE DES ILLUSIONS VOL 2'
                />
                <Image width={500} height={384} className='w-[200px] h-[133px] rounded-[20px] md:w-[500px] md:h-[384px]' 
                    src='https://i.scdn.co/image/ab67616d00001e02ecdb8f824367a53468100faf'
                    alt='Yung Lean - Stardust'
                />
                <Image width={500} height={384} className='w-[200px] h-[133px] rounded-[20px] md:w-[500px] md:h-[384px]' 
                    src='https://i.scdn.co/image/ab67616d00001e021624590458126fc8b8c64c2f'
                    alt='Lana Del Rey - Ultraviolence'
                />
                <Image width={500} height={384} className='w-[200px] h-[133px] rounded-[20px] md:w-[500px] md:h-[384px]' 
                    src='https://i.scdn.co/image/ab67616d00001e020dcf0f3680cff56fe5ff2288'
                    alt='A$AP Rocky - Tailor Swif'
                />
                <Image width={500} height={384} className='w-[200px] h-[133px] rounded-[20px] md:w-[500px] md:h-[384px]' 
                    src='https://i.scdn.co/image/ab67616d00001e02bc1028b7e9cd2b17c770a520'
                    alt='Midnight Miami (feat Konvy) - Nino Paid, Konvy'
                />
            </InfiniteSlider>
            <InfiniteSlider direction='horizontal' reverse>
                <Image width={500} height={384} className='w-[200px] h-[133px] rounded-[20px] md:w-[500px] md:h-[384px]' 
                    src='https://i.scdn.co/image/ab67616d00001e020fc93fe41791c5aa51ae9645'
                    alt='DAYS BEFORE RODEO - Travis Scott'
                />
                <Image width={500} height={384} className='w-[200px] h-[133px] rounded-[20px] md:w-[500px] md:h-[384px]' 
                    src='https://i.scdn.co/image/ab67616d00001e02d3e668d0c74720c8c23978e3'
                    alt="You're in My System - TORYONTHEBEAT"
                />
                <Image width={500} height={384} className='w-[200px] h-[133px] rounded-[20px] md:w-[500px] md:h-[384px]' 
                    src='https://i.scdn.co/image/ab67616d00001e0234537499b159b0e6d18e5655'
                    alt="You can't tell me - People Make the World Go Round"
                />
                <Image width={500} height={384} className='w-[200px] h-[133px] rounded-[20px] md:w-[500px] md:h-[384px]' 
                    src='https://i.scdn.co/image/ab67616d00001e020cd942c1a864afa4e92d04f2'
                    alt='ye - Kanye West'
                />
                <Image width={500} height={384} className='w-[200px] h-[133px] rounded-[20px] md:w-[500px] md:h-[384px]' 
                    src='https://i.scdn.co/image/ab67616d00001e02a875c3ec944b4f164ab5c350'
                    alt='Slime Season 3 - Young Thug'
                />
                <Image width={500} height={384} className='w-[200px] h-[133px] rounded-[20px] md:w-[500px] md:h-[384px]' 
                    src='https://i.scdn.co/image/ab67616d00001e026376f0d88bbbc8cd051e3401'
                    alt='SWAG - 8ruki'
                />
            </InfiniteSlider>
        </div>
    );
}

