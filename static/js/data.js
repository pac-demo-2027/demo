window.DEMO = {
  "long30s": [
    {
      "name": "hdtf-028",
      "dataset": "hdtf",
      "rho": {
        "Decoupled": 1.548,
        "Decoupled-50": 1.009,
        "Chained-AD": 1.777,
        "Chained-DA": 0.456
      },
      "arms": {
        "decoupled": "static/videos/long30s/hdtf-028__decoupled.mp4",
        "decoupled50": "static/videos/long30s/hdtf-028__decoupled50.mp4",
        "chained_ad": "static/videos/long30s/hdtf-028__chained_ad.mp4",
        "chained_da": "static/videos/long30s/hdtf-028__chained_da.mp4"
      },
      "poster": "static/posters/hdtf-028.jpg",
      "duration": 29.96,
      "w": 512,
      "h": 512
    },
    {
      "name": "hdtf-040",
      "dataset": "hdtf",
      "rho": {
        "Decoupled": 1.212,
        "Decoupled-50": 0.902,
        "Chained-AD": 1.675,
        "Chained-DA": 0.427
      },
      "arms": {
        "decoupled": "static/videos/long30s/hdtf-040__decoupled.mp4",
        "decoupled50": "static/videos/long30s/hdtf-040__decoupled50.mp4",
        "chained_ad": "static/videos/long30s/hdtf-040__chained_ad.mp4",
        "chained_da": "static/videos/long30s/hdtf-040__chained_da.mp4"
      },
      "poster": "static/posters/hdtf-040.jpg",
      "duration": 29.96,
      "w": 512,
      "h": 512
    },
    {
      "name": "hdtf-075",
      "dataset": "hdtf",
      "rho": {
        "Decoupled": 0.97,
        "Decoupled-50": 0.716,
        "Chained-AD": 1.416,
        "Chained-DA": 0.216
      },
      "arms": {
        "decoupled": "static/videos/long30s/hdtf-075__decoupled.mp4",
        "decoupled50": "static/videos/long30s/hdtf-075__decoupled50.mp4",
        "chained_ad": "static/videos/long30s/hdtf-075__chained_ad.mp4",
        "chained_da": "static/videos/long30s/hdtf-075__chained_da.mp4"
      },
      "poster": "static/posters/hdtf-075.jpg",
      "duration": 29.96,
      "w": 512,
      "h": 512
    },
    {
      "name": "avspeech-071",
      "dataset": "avspeech",
      "rho": {
        "Decoupled": 1.154,
        "Decoupled-50": 0.74,
        "Chained-AD": 1.409,
        "Chained-DA": 0.538
      },
      "arms": {
        "decoupled": "static/videos/long30s/avspeech-071__decoupled.mp4",
        "decoupled50": "static/videos/long30s/avspeech-071__decoupled50.mp4",
        "chained_ad": "static/videos/long30s/avspeech-071__chained_ad.mp4",
        "chained_da": "static/videos/long30s/avspeech-071__chained_da.mp4"
      },
      "poster": "static/posters/avspeech-071.jpg",
      "duration": 29.96,
      "w": 512,
      "h": 296
    },
    {
      "name": "avspeech-079",
      "dataset": "avspeech",
      "rho": {
        "Decoupled": 0.958,
        "Decoupled-50": 0.704,
        "Chained-AD": 1.519,
        "Chained-DA": 0.264
      },
      "arms": {
        "decoupled": "static/videos/long30s/avspeech-079__decoupled.mp4",
        "decoupled50": "static/videos/long30s/avspeech-079__decoupled50.mp4",
        "chained_ad": "static/videos/long30s/avspeech-079__chained_ad.mp4",
        "chained_da": "static/videos/long30s/avspeech-079__chained_da.mp4"
      },
      "poster": "static/posters/avspeech-079.jpg",
      "duration": 29.96,
      "w": 512,
      "h": 296
    },
    {
      "name": "vidchatbench-088",
      "dataset": "vidchatbench",
      "rho": {
        "Decoupled": 1.011,
        "Decoupled-50": 0.932,
        "Chained-AD": 1.306,
        "Chained-DA": 0.396
      },
      "arms": {
        "decoupled": "static/videos/long30s/vidchatbench-088__decoupled.mp4",
        "decoupled50": "static/videos/long30s/vidchatbench-088__decoupled50.mp4",
        "chained_ad": "static/videos/long30s/vidchatbench-088__chained_ad.mp4",
        "chained_da": "static/videos/long30s/vidchatbench-088__chained_da.mp4"
      },
      "poster": "static/posters/vidchatbench-088.jpg",
      "duration": 29.96,
      "w": 512,
      "h": 512
    }
  ],
  "heldout": [
    {
      "index": 98,
      "bucket": "640x640",
      "frames": 243,
      "text": null,
      "iqa": {
        "Decoupled": 0.9277,
        "Chained-DA": 0.8698,
        "Whole-seg": 0.9499
      },
      "drift": {
        "Decoupled": 1.044,
        "Chained-DA": 0.661,
        "Whole-seg": 0.993
      },
      "arms": {
        "teacher": "static/videos/heldout/640x640_0098__teacher.mp4",
        "wholeseg": "static/videos/heldout/640x640_0098__wholeseg.mp4",
        "decoupled": "static/videos/heldout/640x640_0098__decoupled.mp4",
        "chained_da": "static/videos/heldout/640x640_0098__chained_da.mp4"
      },
      "poster": "static/posters/ho_640x640_0098.jpg",
      "duration": 10.14,
      "w": 512,
      "h": 512
    },
    {
      "index": 9,
      "bucket": "640x640",
      "frames": 107,
      "text": "reports that rates of autism look at this chart just since 2000.",
      "iqa": {
        "Decoupled": 0.8471,
        "Chained-DA": 0.7564,
        "Whole-seg": 0.8298
      },
      "drift": {
        "Decoupled": 1.12,
        "Chained-DA": 0.884,
        "Whole-seg": 1.036
      },
      "arms": {
        "teacher": "static/videos/heldout/640x640_0009__teacher.mp4",
        "wholeseg": "static/videos/heldout/640x640_0009__wholeseg.mp4",
        "decoupled": "static/videos/heldout/640x640_0009__decoupled.mp4",
        "chained_da": "static/videos/heldout/640x640_0009__chained_da.mp4"
      },
      "poster": "static/posters/ho_640x640_0009.jpg",
      "duration": 4.48,
      "w": 512,
      "h": 512
    },
    {
      "index": 96,
      "bucket": "640x640",
      "frames": 243,
      "text": null,
      "iqa": {
        "Decoupled": 0.8976,
        "Chained-DA": 0.8174,
        "Whole-seg": 0.9115
      },
      "drift": {
        "Decoupled": 1.076,
        "Chained-DA": 0.886,
        "Whole-seg": 1.006
      },
      "arms": {
        "teacher": "static/videos/heldout/640x640_0096__teacher.mp4",
        "wholeseg": "static/videos/heldout/640x640_0096__wholeseg.mp4",
        "decoupled": "static/videos/heldout/640x640_0096__decoupled.mp4",
        "chained_da": "static/videos/heldout/640x640_0096__chained_da.mp4"
      },
      "poster": "static/posters/ho_640x640_0096.jpg",
      "duration": 10.14,
      "w": 512,
      "h": 512
    },
    {
      "index": 55,
      "bucket": "480x832",
      "frames": 277,
      "text": "Plus 30, Trump District, and now this race is apparently close. I still think the Republican is very likely to win here. Let's be clear. But, the fact that there's nervousness about the",
      "iqa": {
        "Decoupled": 0.9107,
        "Chained-DA": 0.5699,
        "Whole-seg": 0.8842
      },
      "drift": {
        "Decoupled": 1.359,
        "Chained-DA": 0.524,
        "Whole-seg": 1.023
      },
      "arms": {
        "teacher": "static/videos/heldout/480x832_0055__teacher.mp4",
        "wholeseg": "static/videos/heldout/480x832_0055__wholeseg.mp4",
        "decoupled": "static/videos/heldout/480x832_0055__decoupled.mp4",
        "chained_da": "static/videos/heldout/480x832_0055__chained_da.mp4"
      },
      "poster": "static/posters/ho_480x832_0055.jpg",
      "duration": 11.55,
      "w": 512,
      "h": 296
    },
    {
      "index": 63,
      "bucket": "480x832",
      "frames": 277,
      "text": "See, this is what they're being exposed to. That would be like an outsider pointing to Jacobin or something. Mm-hmm. And saying, like, see, this is available in America. It's like, yeah, it's, um, it's avai-",
      "iqa": {
        "Decoupled": 0.8183,
        "Chained-DA": 0.441,
        "Whole-seg": 0.8662
      },
      "drift": {
        "Decoupled": 1.145,
        "Chained-DA": 0.494,
        "Whole-seg": 0.917
      },
      "arms": {
        "teacher": "static/videos/heldout/480x832_0063__teacher.mp4",
        "wholeseg": "static/videos/heldout/480x832_0063__wholeseg.mp4",
        "decoupled": "static/videos/heldout/480x832_0063__decoupled.mp4",
        "chained_da": "static/videos/heldout/480x832_0063__chained_da.mp4"
      },
      "poster": "static/posters/ho_480x832_0063.jpg",
      "duration": 11.55,
      "w": 512,
      "h": 296
    },
    {
      "index": 3,
      "bucket": "480x832",
      "frames": 107,
      "text": "Wade called himself the father of IVF while admitting he didn't know what IVF was.",
      "iqa": {
        "Decoupled": 0.6963,
        "Chained-DA": 0.5146,
        "Whole-seg": 0.7229
      },
      "drift": {
        "Decoupled": 1.131,
        "Chained-DA": 0.847,
        "Whole-seg": 0.961
      },
      "arms": {
        "teacher": "static/videos/heldout/480x832_0003__teacher.mp4",
        "wholeseg": "static/videos/heldout/480x832_0003__wholeseg.mp4",
        "decoupled": "static/videos/heldout/480x832_0003__decoupled.mp4",
        "chained_da": "static/videos/heldout/480x832_0003__chained_da.mp4"
      },
      "poster": "static/posters/ho_480x832_0003.jpg",
      "duration": 4.48,
      "w": 512,
      "h": 296
    }
  ],
  "vabench": [
    {
      "name": "Animals · dog",
      "stem": "large_dog_barking_in_misty_mountain",
      "category": "3_Animals",
      "text": "Large dog in mountain wilderness, head raised, mouth open barking, misty woods, open spacious background",
      "arms": {
        "decoupled": "static/videos/vabench/large_dog_barking_in_misty_mountain__ar4.mp4",
        "nar4": "static/videos/vabench/large_dog_barking_in_misty_mountain__nar4.mp4"
      },
      "poster": "static/posters/vb_large_dog_barking_in_misty_mountain.jpg",
      "duration": 5.18,
      "w": 640,
      "h": 370,
      "frames": 124
    },
    {
      "name": "Music · guitar",
      "stem": "woman_playing_acoustic_guitar_indoors",
      "category": "7_Music",
      "text": "A woman sitting on a comfortable sofa, holding an acoustic guitar and strumming its strings, in a warm indoor environment.",
      "arms": {
        "decoupled": "static/videos/vabench/woman_playing_acoustic_guitar_indoors__ar4.mp4",
        "nar4": "static/videos/vabench/woman_playing_acoustic_guitar_indoors__nar4.mp4"
      },
      "poster": "static/posters/vb_woman_playing_acoustic_guitar_indoors.jpg",
      "duration": 5.18,
      "w": 640,
      "h": 370,
      "frames": 124
    },
    {
      "name": "Nature · volcano",
      "stem": "volcano_eruption_night_sounds_2",
      "category": "2_Natural_Environment",
      "text": "Under the night sky, a volcano erupts with lava flowing down its slopes, surrounded by mountains and trees with rustling leaves.",
      "arms": {
        "decoupled": "static/videos/vabench/volcano_eruption_night_sounds_2__ar4.mp4",
        "nar4": "static/videos/vabench/volcano_eruption_night_sounds_2__nar4.mp4"
      },
      "poster": "static/posters/vb_volcano_eruption_night_sounds_2.jpg",
      "duration": 5.18,
      "w": 640,
      "h": 370,
      "frames": 124
    },
    {
      "name": "Atmosphere · fireworks",
      "stem": "fireworks_echoing_in_night_sky_2",
      "category": "2_Indoor_Environment_and_Urban_Atmosphere",
      "text": "Magnificent fireworks bursting in the night sky over an urban area.",
      "arms": {
        "decoupled": "static/videos/vabench/fireworks_echoing_in_night_sky_2__ar4.mp4",
        "nar4": "static/videos/vabench/fireworks_echoing_in_night_sky_2__nar4.mp4"
      },
      "poster": "static/posters/vb_fireworks_echoing_in_night_sky_2.jpg",
      "duration": 5.18,
      "w": 640,
      "h": 370,
      "frames": 124
    },
    {
      "name": "Rhythm · helicopter",
      "stem": "helicopter_blades_wind_trees_sky",
      "category": "4__Rhythm_and_Cyclical_Synchronization",
      "text": "A black helicopter flies against a background of blue sky and green trees.",
      "arms": {
        "decoupled": "static/videos/vabench/helicopter_blades_wind_trees_sky__ar4.mp4",
        "nar4": "static/videos/vabench/helicopter_blades_wind_trees_sky__nar4.mp4"
      },
      "poster": "static/posters/vb_helicopter_blades_wind_trees_sky.jpg",
      "duration": 5.18,
      "w": 640,
      "h": 370,
      "frames": 124
    },
    {
      "name": "World · airshow",
      "stem": "aerial_flight_performance_on_beach_2",
      "category": "11_Physical_Knowledge_and_World_Knowledge",
      "text": "A crowd on a beach watching an airplane performing aerial maneuvers in the sky above.",
      "arms": {
        "decoupled": "static/videos/vabench/aerial_flight_performance_on_beach_2__ar4.mp4",
        "nar4": "static/videos/vabench/aerial_flight_performance_on_beach_2__nar4.mp4"
      },
      "poster": "static/posters/vb_aerial_flight_performance_on_beach_2.jpg",
      "duration": 5.18,
      "w": 640,
      "h": 370,
      "frames": 124
    }
  ]
};
