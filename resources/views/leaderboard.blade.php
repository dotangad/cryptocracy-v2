<?php
function class_from_rank($rank)
{
    switch ($rank) {
        case $rank == 1:
            return 'first';
            break;
        case $rank == 2:
            return 'second';
            break;
        case $rank == 3:
            return 'third';
            break;
        case $rank <= 15:
            return 'top15';
            break;
    }
}
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link rel="icon" href="/img/footer-logo-white-bg.png" type="image/png" />
    <link href="{{ mix('/css/leaderboard.css') }}" rel="stylesheet" />
    <link href="{{ asset('/fonts/style.css') }}" rel="stylesheet" />
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-168595780-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'UA-168595780-1');
    </script>
    <title>Cryptocracy 2021</title>
</head>

<body>
    <div class="layers">
        <div class="layer curves">
            <img src="/img/header-curves.png" />
        </div>
        <div class="layer leaderboard">
            <div class="container">
                <div class="title">Cryptocracy II</div>
                <p class="subtitle">Cryptocracy II concluded on 31st July 2021 at 11:59PM IST. It saw active participation from over 1500 users and a prize pool of ₹5,00,000 ($7,000).</p>
                <p class="subtitle">We&apos;d like to thank our sponsors for making this event possible, and the participants for validating the weeks of effort we put into this event.</p>
                <p class="subtitle signoff">Until next time<br /><i>The Cryptocracy Team</i></p>
                <div class="socials">
                    <a href="https://discord.gg/Rj2Q9xuKWR" target="_blank"><svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.5027 0.920497L14.4522 0.938886L14.4705 0.920497H14.5027ZM2.80891 2.86512C5.61781 0.82089 8.22138 0.918965 8.22138 0.918965L8.43132 1.12584C4.99412 1.94568 3.43566 3.48115 3.43566 3.48115C3.43566 3.48115 3.85248 3.27734 4.58037 2.96626C9.20978 1.14576 14.2652 1.27755 18.9452 3.58229C18.9452 3.58229 17.3837 2.14642 14.1579 1.22698L14.443 0.946548C14.8889 0.94808 17.2488 1.03083 19.7742 2.87738C19.7742 2.87738 22.6 7.70447 22.6 13.6349C22.5065 13.5215 20.8469 16.1879 16.5761 16.2798C16.5761 16.2798 15.8528 15.4615 15.3379 14.7474C17.8357 14.0303 18.7705 12.5959 18.7705 12.5959C17.9506 13.1123 17.2028 13.4188 16.596 13.7253C15.6628 14.136 14.728 14.3383 13.7948 14.5451C9.37528 15.2623 6.89431 14.0624 4.54972 13.1108L3.74827 12.7032C3.74827 12.7032 4.68151 14.1375 7.07973 14.8547C6.44991 15.5734 5.82622 16.3902 5.82622 16.3902C1.55693 16.289 0 13.6226 0 13.6226C0 7.68302 2.80891 2.86512 2.80891 2.86512Z" fill="currentColor"></path>
                            <path d="M14.7785 11.7822C15.868 11.7822 16.7553 10.8628 16.7553 9.72881C16.7553 8.60249 15.8726 7.68304 14.7785 7.68304V7.68764C13.6936 7.68764 12.8048 8.60402 12.8017 9.738C12.8017 10.8628 13.689 11.7822 14.7785 11.7822Z" fill="#181818"></path>
                            <path d="M7.70184 11.7822C8.79139 11.7822 9.67865 10.8628 9.67865 9.72881C9.67865 8.60249 8.79752 7.68304 7.70797 7.68304L7.70184 7.68764C6.6123 7.68764 5.72504 8.60402 5.72504 9.738C5.72504 10.8628 6.6123 11.7822 7.70184 11.7822Z" fill="#181818"></path>
                        </svg></a><a href="https://www.facebook.com/cryptocracyhunt/" target="_blank"><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0)">
                                <path d="M11.3312 2.82271H12.8832V0.119708C12.6154 0.082875 11.6946 0 10.6222 0C8.38453 0 6.8517 1.40746 6.8517 3.99429V6.375H4.38245V9.39675H6.8517V17H9.87911V9.39746H12.2485L12.6246 6.37571H9.87841V4.29392C9.87911 3.42054 10.1143 2.82271 11.3312 2.82271Z" fill="currentColor"></path>
                            </g>
                            <defs>
                                <clipPath id="clip0">
                                    <rect width="17" height="17" fill="currentColor"></rect>
                                </clipPath>
                            </defs>
                        </svg></a><a href="https://twitter.com/playcryptocracy" target="_blank"><svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.0556 3.98563C17.0631 4.15883 17.0667 4.33283 17.0667 4.50764C17.0667 9.845 13.1458 15.9997 5.97527 16C3.77377 16 1.72518 15.3314 0 14.1856C0.305022 14.2229 0.615486 14.2415 0.929838 14.2415C2.75634 14.2415 4.4372 13.5959 5.77158 12.5125C4.06506 12.4797 2.62625 11.3119 2.12971 9.70698C2.36735 9.75424 2.61174 9.78002 2.86234 9.78002C3.21815 9.78002 3.56282 9.73034 3.89039 9.6377C2.10665 9.26768 0.762944 7.63428 0.762944 5.67838C0.762944 5.66012 0.762944 5.64374 0.763462 5.62683C1.28876 5.92945 1.88948 6.1115 2.52907 6.13191C1.48235 5.40825 0.794301 4.17118 0.794301 2.76978C0.794301 2.02974 0.98737 1.33642 1.32219 0.739503C3.24459 3.18357 6.11755 4.79092 9.35747 4.95982C9.2906 4.66391 9.25614 4.35565 9.25614 4.0388C9.25614 1.80902 11.002 0 13.1548 0C14.2762 0 15.2889 0.491122 16.0003 1.27627C16.8884 1.09475 17.7224 0.758568 18.4757 0.295908C18.1842 1.23868 17.5664 2.02974 16.7614 2.52999C17.55 2.43225 18.3016 2.21555 19 1.89387C18.4783 2.70399 17.8167 3.41557 17.0556 3.98563Z" fill="currentColor"></path>
                        </svg></a><a href="https://www.instagram.com/playcryptocracy/" target="_blank"><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.1428 8.49997C12.1428 10.5119 10.5119 12.1428 8.49997 12.1428C6.48804 12.1428 4.85712 10.5119 4.85712 8.49997C4.85712 6.48804 6.48804 4.85712 8.49997 4.85712C10.5119 4.85712 12.1428 6.48804 12.1428 8.49997Z" fill="currentColor"></path>
                            <path d="M16.5826 2.38512C16.4165 1.93493 16.1514 1.52745 15.807 1.19297C15.4726 0.848581 15.0653 0.583537 14.6149 0.417403C14.2496 0.275513 13.7007 0.106624 12.6899 0.0606129C11.5964 0.010745 11.2685 0 8.50014 0C5.7315 0 5.40364 0.0104695 4.31041 0.0603374C3.29955 0.106624 2.75045 0.275513 2.38539 0.417403C1.93493 0.583537 1.52745 0.848581 1.19325 1.19297C0.848857 1.52745 0.583813 1.93465 0.417403 2.38512C0.275513 2.75045 0.106624 3.29955 0.0606129 4.31041C0.010745 5.40364 0 5.7315 0 8.50014C0 11.2685 0.010745 11.5964 0.0606129 12.6899C0.106624 13.7007 0.275513 14.2496 0.417403 14.6149C0.583813 15.0653 0.848581 15.4726 1.19297 15.807C1.52745 16.1514 1.93465 16.4165 2.38512 16.5826C2.75045 16.7248 3.29955 16.8937 4.31041 16.9397C5.40364 16.9895 5.73123 17 8.49986 17C11.2688 17 11.5966 16.9895 12.6896 16.9397C13.7005 16.8937 14.2496 16.7248 14.6149 16.5826C15.5191 16.2338 16.2338 15.5191 16.5826 14.6149C16.7245 14.2496 16.8934 13.7007 16.9397 12.6899C16.9895 11.5964 17 11.2685 17 8.50014C17 5.7315 16.9895 5.40364 16.9397 4.31041C16.8937 3.29955 16.7248 2.75045 16.5826 2.38512ZM8.50014 13.8239C5.55958 13.8239 3.17584 11.4404 3.17584 8.49986C3.17584 5.55931 5.55958 3.17584 8.50014 3.17584C11.4404 3.17584 13.8242 5.55931 13.8242 8.49986C13.8242 11.4404 11.4404 13.8239 8.50014 13.8239ZM14.0347 4.20957C13.3475 4.20957 12.7904 3.65248 12.7904 2.96535C12.7904 2.27822 13.3475 1.72113 14.0347 1.72113C14.7218 1.72113 15.2789 2.27822 15.2789 2.96535C15.2786 3.65248 14.7218 4.20957 14.0347 4.20957Z" fill="currentColor"></path>
                        </svg></a><a href="mailto:admin@cryptichunt.com" target="_blank"><svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.0496 11.4151C9.87013 11.5513 9.66824 11.6058 9.48878 11.6058C9.30933 11.6058 9.10744 11.5513 8.92798 11.4151L0 4.79489V13.5946C0 15.4744 1.2562 17 2.80401 17H16.196C17.7438 17 19 15.4744 19 13.5946V4.79489L10.0496 11.4151Z" fill="currentColor"></path>
                            <path d="M16.196 0H2.80401C1.48051 0 0.358907 1.14423 0.0897217 2.66987L9.51121 9.64423L18.9103 2.66987C18.6411 1.14423 17.5195 0 16.196 0Z" fill="currentColor"></path>
                        </svg></a>
                </div>
                <div class="sponsors">
                    <a href="https://www.athenaeducation.co.in/" target="_blank">
                        <img src="/img/athena.png" alt="Athena Education" style="height: 80px;">
                    </a>
                    <a href="https://slingshotahead.com/?utm_campaign=partnership&amp;utm_medium=web&amp;utm_source=cryptocracy" target="_blank">
                        <img src="/img/slingshot-white.png" alt="Slingshot" style="height: 60px;">
                    </a>
                    <a href="https://www.interviewcake.com" target="_blank">
                        <img src="/img/interviewcake.svg" alt="InterviewCake" style="height: 30px;">
                    </a>
                    <a href="https://www.taskade.com/" target="_blank">
                        <img src="/img/taskade-logo.png" alt="Taskade" style="filter: invert(1); height: 30px;">
                    </a>
                    <a href="https://gen.xyz/" target="_blank">
                        <img src="/img/xyz-logo-white.png" alt="gen.xyz" style="height: 40px;">
                    </a>
                </div>

                <div class="table">
                    <table>
                        <thead>
                            <tr>
                                <th>Rank</th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($users as $user)
                            <tr class={{class_from_rank($user['rank'])}}>
                                <td>{{$user['rank']}}</td>
                                <td>{{$user['username']}}</td>
                            </tr>
                            @endforeach
                            @foreach ($dq as $user)
                            <tr class="dq">
                                <td>DQ</td>
                                <td>{{$user['username']}}</td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</body>

</html>
