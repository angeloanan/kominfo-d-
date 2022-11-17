import type { SimpleIcon } from 'simple-icons'
import {
  siAdafruit,
  siAdobe,
  siAlgolia,
  siAmazon,
  siAmazonaws,
  siApachemaven,
  siAppstore,
  siArchlinux,
  siArduino,
  siAtlassian,
  siAutodesk,
  siBitbucket,
  siBlender,
  siBlogger,
  siChocolatey,
  siCloudflare,
  siCnn,
  siCodecademy,
  siCodesandbox,
  siCodingame,
  siComposer,
  siDebian,
  siDeezer,
  siDevdotto,
  siDigitalocean,
  siDiscord,
  siDocker,
  siDuckduckgo,
  siEa,
  siEpicgames,
  siFacebook,
  siFandom,
  siFastly,
  siFigma,
  siFirebase,
  siFreecodecamp,
  siGithub,
  siGitlab,
  siGmail,
  siGodotengine,
  siGoogle,
  siGoogleclassroom,
  siGooglecloud,
  siGoogledrive,
  siGooglemaps,
  siHackerrank,
  siHeroku,
  siImdb,
  siImgur,
  siInstagram,
  siJenkins,
  siJsdelivr,
  siKalilinux,
  siKubernetes,
  siLeetcode,
  siLine,
  siLinear,
  siLinkedin,
  siLinktree,
  siLinode,
  siLinux,
  siMailchimp,
  siMediafire,
  siMedium,
  siMessenger,
  siMicrosoft,
  siMicrosoftazure,
  siMicrosoftoffice,
  siMicrosoftsharepoint,
  siMicrosoftteams,
  siNetflix,
  siNetlify,
  siNewyorktimes,
  siNintendo,
  siNotion,
  siNpm,
  siOvh,
  siPatreon,
  siPaypal,
  siPinterest,
  siPolywork,
  siPypi,
  siQuora,
  siReadthedocs,
  siReddit,
  siRoblox,
  siScratch,
  siSlack,
  siSololearn,
  siSoundcloud,
  siSpotify,
  siStackexchange,
  siStackoverflow,
  siStatuspage,
  siSteam,
  siStmicroelectronics,
  siSupabase,
  siSurveymonkey,
  siTelegram,
  siTiktok,
  siTrello,
  siTumblr,
  siTwilio,
  siTwitch,
  siTwitter,
  siUbisoft,
  siUbuntu,
  siUnity,
  siUnrealengine,
  siVercel,
  siVultr,
  siWaze,
  siWhatsapp,
  siWikipedia,
  siWordpress,
  siYahoo,
  siYoutube,
  siZoho,
  siZoom
} from 'simple-icons/icons'

import {
  alodokterIcon,
  bcaIcon,
  brainlyIcon,
  components101Icon,
  danaIcon,
  devDocsIcon,
  gojekIcon,
  halodocIcon,
  hotstarIcon,
  jeniusIcon,
  lazadaIcon,
  mangakuIcon,
  mobileLegendsIcon,
  nodeMCUIcon,
  ovoIcon,
  shopeeIcon,
  telkomselIcon,
  tokopediaIcon,
  travelokaIcon,
  ubuntuArchivesIcon,
  vidioComIcon,
  w3SchoolsIcon,
  zeniusIcon
} from './_icons'

export interface WebsiteData {
  website: string
  icon: SimpleIcon
}

export interface WebsiteInterface {
  website: string
  icon: Partial<SimpleIcon>
  categories: Array<string>
}

export const websites = [
  { website: 'line.me', icon: siLine, categories: ['idnStarterPack', 'social'] },
  {
    website: 'web.whatsapp.com',
    icon: siWhatsapp,
    categories: ['idnStarterPack', 'social', 'topWebUSA']
  },
  { website: 'www.ovo.id', icon: ovoIcon, categories: ['idnStarterPack', 'finance'] },
  {
    website: 'tiktok.com',
    icon: siTiktok,
    categories: ['idnStarterPack', 'social', 'entertainment', 'topWebUSA']
  },
  { website: 'google.com', icon: siGoogle, categories: ['idnStarterPack', 'search', 'topWebUSA'] },
  {
    website: 'facebook.com',
    icon: siFacebook,
    categories: ['idnStarterPack', 'social', 'topWebUSA']
  },
  {
    website: 'twitter.com',
    icon: siTwitter,
    categories: ['idnStarterPack', 'social', 'topWebUSA']
  },
  {
    website: 'instagram.com',
    icon: siInstagram,
    categories: ['idnStarterPack', 'social', 'topWebUSA']
  },
  { website: 'messenger.com', icon: siMessenger, categories: ['idnStarterPack', 'social'] },
  {
    website: 'wikipedia.org',
    icon: siWikipedia,
    categories: ['idnStarterPack', 'education', 'topWebUSA']
  },
  { website: 'gojek.com', icon: gojekIcon, categories: ['idnStarterPack', 'finance'] },
  { website: 'dana.id', icon: danaIcon, categories: ['idnStarterPack', 'finance'] },
  {
    website: 'web.telegram.org',
    icon: siTelegram,
    categories: ['idnStarterPack', 'social', 'career']
  },
  { website: 'spotify.com', icon: siSpotify, categories: ['idnStarterPack', 'entertainment'] },
  { website: 'deezer.com', icon: siDeezer, categories: ['idnStarterPack', 'entertainment'] },
  { website: 'www.telkomsel.com', icon: telkomselIcon, categories: ['idnStarterPack', 'finance'] },
  { website: 'google.com', icon: siGooglemaps, categories: ['idnStarterPack'] },
  { website: 'waze.com', icon: siWaze, categories: ['idnStarterPack', 'social'] },
  { website: 'tokopedia.com', icon: tokopediaIcon, categories: ['idnStarterPack', 'ecommerce'] },
  { website: 'shopee.co.id', icon: shopeeIcon, categories: ['idnStarterPack', 'ecommerce'] },
  { website: 'www.lazada.co.id', icon: lazadaIcon, categories: ['idnStarterPack', 'ecommerce'] },
  { website: 'traveloka.co.id', icon: travelokaIcon, categories: ['idnStarterPack'] },
  { website: 'bca.co.id', icon: bcaIcon, categories: ['idnStarterPack', 'finance'] },
  { website: 'google.com', icon: siGoogleclassroom, categories: ['idnStarterPack', 'education'] },
  { website: 'google.com', icon: siGoogledrive, categories: ['idnStarterPack', 'education'] },
  { website: 'brainly.co.id', icon: brainlyIcon, categories: ['idnStarterPack', 'education'] },
  { website: 'google.com', icon: siGmail, categories: ['idnStarterPack', 'devStarterPack'] },
  {
    website: 'netflix.com',
    icon: siNetflix,
    categories: ['idnStarterPack', 'entertainment', 'topWebUSA']
  },
  { website: 'hotstar.com', icon: hotstarIcon, categories: ['idnStarterPack', 'entertainment'] },
  {
    website: 'notion.com',
    icon: siNotion,
    categories: ['idnStarterPack', 'development', 'education', 'topWebUSA']
  },
  {
    website: 'pinterest.com',
    icon: siPinterest,
    categories: ['idnStarterPack', 'social', 'topWebUSA']
  },
  {
    website: 'soundcloud.com',
    icon: siSoundcloud,
    categories: ['idnStarterPack', 'social', 'entertainment']
  },
  { website: 'www.zenius.net', icon: zeniusIcon, categories: ['idnStarterPack', 'education'] },
  {
    website: 'paypal.com',
    icon: siPaypal,
    categories: ['idnStarterPack', 'finance', 'career', 'topWebUSA']
  },
  { website: '2secure.jenius.co.id', icon: jeniusIcon, categories: ['idnStarterPack', 'finance'] },
  { website: 'ea.com', icon: siEa, categories: ['idnStarterPack', 'game'] },
  { website: 'epicgames.com', icon: siEpicgames, categories: ['idnStarterPack', 'game'] },
  { website: 'nintendo.com', icon: siNintendo, categories: ['idnStarterPack', 'game'] },
  { website: 'steampowered.com', icon: siSteam, categories: ['idnStarterPack', 'game'] },
  { website: 'ubisoft.com', icon: siUbisoft, categories: ['idnStarterPack', 'game'] },
  {
    website: 'play.google.com/store/apps/details?id=com.mobile.legends',
    icon: mobileLegendsIcon,
    categories: ['idnStarterPack']
  },
  {
    website: 'linkedin.com',
    icon: siLinkedin,
    categories: ['idnStarterPack', 'social', 'development', 'career', 'topWebUSA']
  },
  { website: 'www.alodokter.com', icon: alodokterIcon, categories: ['idnStarterPack', 'health'] },
  { website: 'mangaku.com', icon: mangakuIcon, categories: ['idnStarterPack', 'entertainment'] },
  { website: 'roblox.com', icon: siRoblox, categories: ['idnStarterPack', 'game', 'topWebUSA'] },
  { website: 'www.halodoc.com', icon: halodocIcon, categories: ['idnStarterPack', 'health'] },
  { website: 'mediafire.com', icon: siMediafire, categories: ['idnStarterPack'] },
  { website: 'www.vidio.com', icon: vidioComIcon, categories: ['idnStarterPack', 'entertainment'] },
  { website: 'linktr.ee', icon: siLinktree, categories: ['idnStarterPack'] },
  { website: 'teams.com', icon: siMicrosoftteams, categories: ['idnStarterPack'] },
  // Code storage
  {
    website: 'github.com',
    icon: siGithub,
    categories: ['devStarterPack', 'development', 'topWebUSA']
  },
  { website: 'gitlab.com', icon: siGitlab, categories: ['devStarterPack', 'development'] },
  { website: 'bitbucket.org', icon: siBitbucket, categories: ['devStarterPack', 'development'] },
  // Libs
  { website: 'pypi.org', icon: siPypi, categories: ['devStarterPack', 'development'] },
  { website: 'npmjs.com', icon: siNpm, categories: ['devStarterPack', 'development'] },
  { website: 'getcomposer.org', icon: siComposer, categories: ['devStarterPack', 'development'] },
  { website: 'www.docker.com', icon: siDocker, categories: ['devStarterPack', 'development'] },
  // Services
  { website: 'google.com', icon: siFirebase, categories: ['devStarterPack', 'development'] },
  { website: 'cloudflare.com', icon: siCloudflare, categories: ['devStarterPack', 'development'] },
  { website: 'google.com', icon: siGooglecloud, categories: ['devStarterPack', 'development'] },
  { website: 'aws.amazon.com', icon: siAmazonaws, categories: ['devStarterPack', 'development'] },
  { website: 'azure.com', icon: siMicrosoftazure, categories: ['devStarterPack', 'development'] },
  { website: 'vercel.com', icon: siVercel, categories: ['devStarterPack', 'development'] },
  { website: 'netlify.com', icon: siNetlify, categories: ['devStarterPack', 'development'] },
  {
    website: 'digitalocean.com',
    icon: siDigitalocean,
    categories: ['devStarterPack', 'development']
  },
  { website: 'vultr.com', icon: siVultr, categories: ['devStarterPack', 'development'] },
  { website: 'linode.com', icon: siLinode, categories: ['devStarterPack', 'development'] },
  { website: 'ovh.com', icon: siOvh, categories: ['devStarterPack', 'development'] },
  { website: 'cdn.jsdelivr.net', icon: siJsdelivr, categories: ['devStarterPack', 'development'] },
  { website: 'fastly.com', icon: siFastly, categories: ['devStarterPack', 'development'] },
  { website: 'algolia.com', icon: siAlgolia, categories: ['devStarterPack', 'development'] },
  { website: 'kubernetes.io', icon: siKubernetes, categories: ['devStarterPack', 'development'] },
  { website: 'heroku.com', icon: siHeroku, categories: ['devStarterPack', 'development'] },
  { website: 'supabase.com', icon: siSupabase, categories: ['devStarterPack', 'development'] },
  // Game Engines
  { website: 'unity.com', icon: siUnity, categories: ['devStarterPack', 'game', 'development'] },
  {
    website: 'unrealengine.com',
    icon: siUnrealengine,
    categories: ['devStarterPack', 'game', 'development']
  },
  {
    website: 'godotengine.org',
    icon: siGodotengine,
    categories: ['devStarterPack', 'game', 'development']
  },
  // 3D Modelling | Animation
  { website: 'autodesk.com', icon: siAutodesk, categories: ['devStarterPack', 'development'] },
  { website: 'blender.org', icon: siBlender, categories: ['devStarterPack', 'development'] },
  // Microcontroller
  { website: 'arduino.cc', icon: siArduino, categories: ['devStarterPack', 'development'] },
  {
    website: 'adafruit.com',
    icon: siAdafruit,
    categories: ['devStarterPack', 'development', 'education', 'ecommerce']
  },
  { website: 'www.nodemcu.com', icon: nodeMCUIcon, categories: ['devStarterPack', 'development'] },
  { website: 'st.com', icon: siStmicroelectronics, categories: ['devStarterPack', 'development'] },
  // SocMed
  { website: 'slack.com', icon: siSlack, categories: ['devStarterPack', 'social', 'development'] },
  {
    website: 'polywork.com',
    icon: siPolywork,
    categories: ['devStarterPack', 'social', 'development', 'career']
  },
  {
    website: 'stackexchange.com',
    icon: siStackexchange,
    categories: ['devStarterPack', 'social', 'development', 'education']
  },
  {
    website: 'stackoverflow.com',
    icon: siStackoverflow,
    categories: ['devStarterPack', 'social', 'development', 'education', 'topWebUSA']
  },
  {
    website: 'statuspage.io',
    icon: siStatuspage,
    categories: ['devStarterPack', 'social', 'development']
  },
  // Coding Tutorials
  {
    website: 'codecademy.com',
    icon: siCodecademy,
    categories: ['devStarterPack', 'development', 'education']
  },
  {
    website: 'freecodecamp.org',
    icon: siFreecodecamp,
    categories: ['devStarterPack', 'development', 'education']
  },
  {
    website: 'sololearn.com',
    icon: siSololearn,
    categories: ['devStarterPack', 'development', 'education']
  },
  {
    website: 'scratch.mit.edu',
    icon: siScratch,
    categories: ['devStarterPack', 'development', 'education']
  },
  {
    website: 'w3schools.com',
    icon: w3SchoolsIcon,
    categories: ['devStarterPack', 'development', 'education']
  },
  // Competitive Programming/Training
  { website: 'codingame.com', icon: siCodingame, categories: ['devStarterPack', 'development'] },
  { website: 'hackerrank.com', icon: siHackerrank, categories: ['devStarterPack', 'development'] },
  { website: 'leetcode.com', icon: siLeetcode, categories: ['devStarterPack', 'development'] },
  // Design
  { website: 'figma.com', icon: siFigma, categories: ['devStarterPack', 'development'] },
  { website: 'adobe.com', icon: siAdobe, categories: ['devStarterPack', 'development'] },
  { website: 'codesandbox.io', icon: siCodesandbox, categories: ['devStarterPack', 'development'] },
  // Docs
  { website: 'trello.com', icon: siTrello, categories: ['devStarterPack', 'development'] },
  { website: 'atlassian.com', icon: siAtlassian, categories: ['devStarterPack', 'development'] },
  { website: 'linear.org', icon: siLinear, categories: ['devStarterPack', 'development'] },
  {
    website: 'devdocs.io',
    icon: devDocsIcon,
    categories: ['devStarterPack', 'development', 'education']
  },
  {
    website: 'readthedocs.org',
    icon: siReadthedocs,
    categories: ['devStarterPack', 'development', 'education']
  },
  // Electronic Component Docs
  {
    website: 'components101.com',
    icon: components101Icon,
    categories: ['devStarterPack', 'development']
  },
  // Email
  { website: 'zoho.com', icon: siZoho, categories: ['devStarterPack'] },
  { website: 'mailchimp.com', icon: siMailchimp, categories: ['devStarterPack'] },
  { website: 'twilio.com', icon: siTwilio, categories: ['devStarterPack'] },
  // Package Manager
  {
    website: 'community.chocolatey.org',
    icon: siChocolatey,
    categories: ['devStarterPack', 'development']
  },
  {
    website: 'us.archive.ubuntu.com',
    icon: ubuntuArchivesIcon,
    categories: ['devStarterPack', 'development']
  },
  // Article
  { website: 'medium.com', icon: siMedium, categories: ['devStarterPack', 'development', 'news'] },
  { website: 'dev.to', icon: siDevdotto, categories: ['devStarterPack', 'development', 'news'] },

  { website: 'google.com', icon: siYoutube, categories: ['topWebUSA', 'entertainment'] },
  { website: 'amazon.com', icon: siAmazon, categories: ['topWebUSA', 'ecommerce'] },
  { website: 'apps.apple.com', icon: siAppstore, categories: ['topWebUSA'] },
  { website: 'reddit.com', icon: siReddit, categories: ['topWebUSA', 'social'] },
  { website: 'yahoo.com', icon: siYahoo, categories: ['topWebUSA'] },
  { website: 'discord.com', icon: siDiscord, categories: ['topWebUSA', 'social'] },
  { website: 'twitch.tv', icon: siTwitch, categories: ['topWebUSA', 'social', 'entertainment'] },
  { website: 'zoom.us', icon: siZoom, categories: ['topWebUSA', 'education'] },
  { website: 'duckduckgo.com', icon: siDuckduckgo, categories: ['topWebUSA', 'search'] },
  { website: 'fandom.com', icon: siFandom, categories: ['topWebUSA'] },
  { website: 'quora.com', icon: siQuora, categories: ['topWebUSA', 'social', 'education'] },
  { website: 'imdb.com', icon: siImdb, categories: ['topWebUSA', 'entertainment'] },
  { website: 'cnnindonesia.com', icon: siCnn, categories: ['topWebUSA'] },
  { website: 'office.com', icon: siMicrosoftoffice, categories: ['topWebUSA'] },
  { website: 'microsoft.com', icon: siMicrosoft, categories: ['topWebUSA'] },
  { website: 'imgur.com', icon: siImgur, categories: ['topWebUSA', 'entertainment'] },
  { website: 'tumblr.com', icon: siTumblr, categories: ['topWebUSA', 'social', 'entertainment'] },
  { website: 'wordpress.com', icon: siWordpress, categories: ['topWebUSA', 'news'] },
  { website: 'blogspot.com', icon: siBlogger, categories: ['topWebUSA', 'news'] },
  { website: 'adobe.com', icon: siAdobe, categories: ['topWebUSA'] },
  { website: 'nypost.com', icon: siNewyorktimes, categories: ['topWebUSA', 'news'] },
  { website: 'sharepoint.com', icon: siMicrosoftsharepoint, categories: ['topWebUSA'] },
  { website: 'patreon.com', icon: siPatreon, categories: ['topWebUSA', 'finance'] },
  { website: 'surveymonkey.com', icon: siSurveymonkey, categories: ['topWebUSA'] },

  { website: 'archlinux.org', icon: siArchlinux, categories: ['linuxStarterPack'] },
  { website: 'debian.org', icon: siDebian, categories: ['linuxStarterPack'] },
  { website: 'kali.org', icon: siKalilinux, categories: ['linuxStarterPack'] },
  { website: 'linux.org', icon: siLinux, categories: ['linuxStarterPack'] },
  { website: 'ubuntu.com', icon: siUbuntu, categories: ['linuxStarterPack'] },
  { website: 'us.archive.ubuntu.com', icon: ubuntuArchivesIcon, categories: ['linuxStarterPack'] }
]
