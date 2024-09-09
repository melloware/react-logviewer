import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { LazyLog } from "../components";

const meta: Meta<typeof LazyLog> = {
    component: LazyLog,
    render: (args) => <LazyLog {...args} />,
};

export default meta;
type Story = StoryObj<typeof LazyLog>;

const BaseStory = {
    caseInsensitive: true,
    enableGutters: false,
    enableHotKeys: true,
    enableLineNumbers: true,
    enableLinks: false,
    enableMultilineHighlight: true,
    enableSearch: true,
    enableSearchNavigation: true,
    extraLines: 1,
    height: "520",
    loadingComponent: undefined,
    onError: undefined,
    onHighlight: undefined,
    onLineNumberClick: undefined,
    onLoad: undefined,
    selectableLines: true,
    width: "auto",
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const TextLog: Story = {
    name: "Text Based",
    args: {
        ...BaseStory,
        text: `\x1b[4;1mRunning "clean:all" (clean) task\x1b[0m\n\x1b[32m>> \x1b[39m0 paths cleaned.\n\n\x1b[4;1mRunning "copy:base" (copy) task\x1b[0m\nCreated 188 directories, copied 1433 files\n\n\x1b[4;1mRunning "copy:app" (copy) task\x1b[0m\nCreated 40 directories, copied 233 files\n\n\x1b[4;1mRunning "processhtml:dist" (processhtml) task\x1b[0m\n\n\x1b[4;1mRunning "ngAnnotate:dist" (ngAnnotate) task\x1b[0m\n\x1b[32m>> \x1b[39m52 files successfully generated.\n\n\x1b[4;1mRunning "uglify:dist" (uglify) task\x1b[0m\n\x1b[32m>> \x1b[39m2 sourcemaps created.\n\x1b[32m>> \x1b[39m2 files created.\n\n\x1b[4;1mRunning "less:app" (less) task\x1b[0m\n\x1b[32mFile target/dist/css/alertEvents.css created\x1b[39m\n\x1b[32mFile target/dist/css/application.css created\x1b[39m\n\n\x1b[4;1mRunning "less:libs" (less) task\x1b[0m\n\x1b[31mCreate file target/dist/css/libs.css failed\x1b[39m`,
    },
};

export const URLLog: Story = {
    name: "URL Based",
    args: {
        ...BaseStory,
        url: "https://gist.githubusercontent.com/helfi92/96d4444aa0ed46c5f9060a789d316100/raw/ba0d30a9877ea5cc23c7afcd44505dbc2bab1538/typical-live_backing.log",
    },
};

export const ClearMethod: Story = {
    args: {
        ...BaseStory,
        height: 100,
        text: `Press the Clear button to test clearing the log!`,
    },
    render: (args) => {
        const ref = React.createRef<LazyLog>();
        return (
            <>
                <button
                    onClick={() => ref.current?.clear()}
                    style={{ marginBottom: "6px" }}
                >
                    Clear Log
                </button>
                <br></br>
                <LazyLog ref={ref} {...args} />
            </>
        );
    },
};

export const ClickEvents: Story = {
    args: {
        ...BaseStory,
        height: 150,
        text: `Click me 100!\nClick me 200!\nClick me 300!\n`,
    },
    render: (args) => (
        <LazyLog
            {...args}
            onLineNumberClick={(e) =>
                alert(`Line No: ${e.lineNumber} - ${e.highlightRange}`)
            }
            onLineContentClick={(e) =>
                alert(`Line Content: ${e.currentTarget.textContent}`)
            }
        />
    ),
};

export const HtmlLinks: Story = {
    args: {
        ...BaseStory,
        height: 200,
        enableLinks: true,
        text: `Can be secure https://www.mozilla.org or unsecure http://www.mozilla.org
We want to upload data to ftp://www.mozilla.org or ftps://www.mozilla.org
We just need to write documents for www.mozilla.org
And at the end send a mail to react-lazylog@mozilla.org
`,
    },
};

export const HighlightAndScrolling: Story = {
    args: {
        ...BaseStory,
        height: 400,
        highlight: [70, 75],
        scrollToLine: 77,
        text: `[taskcluster 2018-11-14 21:08:32.452Z] Task ID: DCnyIIOITNCO5wvk1N-Z4A
[taskcluster 2018-11-14 21:08:32.452Z] Worker ID: i-010f9c4a4b041ee6c
[taskcluster 2018-11-14 21:08:32.452Z] Worker Group: us-east-1
[taskcluster 2018-11-14 21:08:32.453Z] Worker Node Type: m3.xlarge
[taskcluster 2018-11-14 21:08:32.453Z] Worker Type: gecko-t-linux-xlarge
[taskcluster 2018-11-14 21:08:32.453Z] Public IP: 54.172.91.38
[taskcluster 2018-11-14 21:08:32.453Z] using cache "level-1-checkouts-v3-2f7c6cb7dd63ce826370" -> /builds/worker/checkouts

[taskcluster 2018-11-14 21:08:33.314Z] Downloading artifact "public/image.tar.zst" from task ID: fZ80-a7IT_yOpvW_jc_HPg.
[taskcluster 2018-11-14 21:08:38.316Z] Download Progress: 67.10%
[taskcluster 2018-11-14 21:08:41.077Z] Downloaded artifact successfully.
[taskcluster 2018-11-14 21:08:41.077Z] Downloaded 265.212 mb
[taskcluster 2018-11-14 21:08:41.077Z] Decompressing downloaded image
[taskcluster 2018-11-14 21:08:43.321Z] Loading docker image from downloaded archive.
[taskcluster 2018-11-14 21:09:06.885Z] Image 'public/image.tar.zst' from task 'fZ80-a7IT_yOpvW_jc_HPg' loaded.  Using image ID sha256:4f1121f66938146cc05dfe474f399a631816e2130c04562187fd96e1085e0433.
[taskcluster 2018-11-14 21:09:07.046Z] === Task Starting ===
[setup 2018-11-14T21:09:07.575Z] run-task started in /builds/worker
[cache 2018-11-14T21:09:07.579Z] cache /builds/worker/checkouts exists; requirements: gid=1000 uid=1000 version=1
[volume 2018-11-14T21:09:07.579Z] changing ownership of volume /builds/worker/.cache to 1000:1000
[volume 2018-11-14T21:09:07.579Z] volume /builds/worker/checkouts is a cache
[setup 2018-11-14T21:09:07.580Z] running as worker:worker
[vcs 2018-11-14T21:09:07.580Z] executing ['hg', 'robustcheckout', '--sharebase', '/builds/worker/checkouts/hg-store', '--purge', '--upstream', 'https://hg.mozilla.org/mozilla-unified', '--revision', '6926e117b97cd120f5de0be2ab3bff7153f10a78', 'https://hg.mozilla.org/try', '/builds/worker/checkouts/gecko']
[vcs 2018-11-14T21:09:07.670Z] (using Mercurial 4.7.1)
[vcs 2018-11-14T21:09:07.671Z] ensuring https://hg.mozilla.org/try@6926e117b97cd120f5de0be2ab3bff7153f10a78 is available at /builds/worker/checkouts/gecko
[vcs 2018-11-14T21:09:08.721Z] (cloning from upstream repo https://hg.mozilla.org/mozilla-unified)
[vcs 2018-11-14T21:09:09.000Z] (sharing from new pooled repository 8ba995b74e18334ab3707f27e9eb8f4e37ba3d29)
[vcs 2018-11-14T21:09:09.516Z] applying clone bundle from https://s3-external-1.amazonaws.com/moz-hg-bundles-us-east-1/mozilla-unified/d3f4d556a89d3e5e72749314a0cf81d942fafc13.packed1.hg
[vcs 2018-11-14T21:09:09.622Z] 478890 files to transfer, 2.58 GB of data
[vcs 2018-11-14T21:09:11.623Z] 
[vcs 2018-11-14T21:09:12.626Z] clone [>                                          ]   67491620/2774698696 1m21s
[vcs 2018-11-14T21:09:13.625Z] clone [>                                          ]  106279767/2774698696 1m16s
[vcs 2018-11-14T21:09:14.625Z] clone [=>                                         ]  146574164/2774698696 1m12s
[vcs 2018-11-14T21:09:15.626Z] clone [=>                                         ]  171690108/2774698696 1m16s
[vcs 2018-11-14T21:09:16.626Z] clone [=>                                         ]  193265720/2774698696 1m21s
[vcs 2018-11-14T21:09:17.626Z] clone [==>                                        ]  225280444/2774698696 1m20s
[vcs 2018-11-14T21:09:18.627Z] clone [==>                                        ]  257914310/2774698696 1m19s
[vcs 2018-11-14T21:09:19.628Z] clone [===>                                       ]  291327117/2774698696 1m17s
[vcs 2018-11-14T21:09:20.628Z] clone [====>                                      ]  338022905/2774698696 1m13s
[vcs 2018-11-14T21:09:21.629Z] clone [====>                                      ]  358720039/2774698696 1m15s
[vcs 2018-11-14T21:09:22.629Z] clone [=====>                                     ]  398228450/2774698696 1m12s
[vcs 2018-11-14T21:09:23.629Z] clone [=====>                                     ]  437631658/2774698696 1m10s
[vcs 2018-11-14T21:09:24.632Z] clone [======>                                    ]  454641086/2774698696 1m12s
[vcs 2018-11-14T21:09:25.633Z] clone [======>                                    ]  476720904/2774698696 1m13s
[vcs 2018-11-14T21:09:26.632Z] clone [======>                                    ]  503457966/2774698696 1m13s
[vcs 2018-11-14T21:09:27.632Z] clone [=======>                                   ]  530000110/2774698696 1m13s
[vcs 2018-11-14T21:09:28.635Z] clone [=======>                                   ]  548996071/2774698696 1m14s
[vcs 2018-11-14T21:09:29.677Z] clone [=======>                                   ]  556249797/2774698696 1m16s
[vcs 2018-11-14T21:09:30.678Z] clone [=======>                                   ]  575477464/2774698696 1m17s
[vcs 2018-11-14T21:09:31.678Z] clone [========>                                  ]  618973849/2774698696 1m14s
[vcs 2018-11-14T21:09:32.678Z] clone [=========>                                 ]  666030876/2774698696 1m10s
[vcs 2018-11-14T21:09:33.678Z] clone [=========>                                 ]  685719380/2774698696 1m11s
[vcs 2018-11-14T21:09:34.679Z] clone [=========>                                 ]  701005022/2774698696 1m12s
[vcs 2018-11-14T21:09:35.678Z] clone [==========>                                ]  717606060/2774698696 1m12s
[vcs 2018-11-14T21:09:36.679Z] clone [==========>                                ]  740693499/2774698696 1m12s
[vcs 2018-11-14T21:09:37.679Z] clone [==========>                                ]  766929304/2774698696 1m11s
[vcs 2018-11-14T21:09:38.679Z] clone [===========>                               ]  792545880/2774698696 1m11s
[vcs 2018-11-14T21:09:39.680Z] clone [===========>                               ]  811996205/2774698696 1m11s
[vcs 2018-11-14T21:09:40.680Z] clone [===========>                               ]  836938668/2774698696 1m10s
[vcs 2018-11-14T21:09:41.680Z] clone [============>                              ]  864657484/2774698696 1m09s
[vcs 2018-11-14T21:09:42.680Z] clone [============>                              ]  891236611/2774698696 1m08s
[vcs 2018-11-14T21:09:43.682Z] clone [=============>                             ]  926041406/2774698696 1m06s
[vcs 2018-11-14T21:09:44.682Z] clone [=============>                             ]  930498893/2774698696 1m08s
[vcs 2018-11-14T21:09:45.682Z] clone [=============>                             ]  956331306/2774698696 1m07s
[vcs 2018-11-14T21:09:46.682Z] clone [==============>                            ] 1002140521/2774698696 1m04s
[vcs 2018-11-14T21:09:47.682Z] clone [==============>                            ] 1012508363/2774698696 1m05s
[vcs 2018-11-14T21:09:48.682Z] clone [==============>                            ] 1017437926/2774698696 1m06s
[vcs 2018-11-14T21:09:49.682Z] clone [==============>                            ] 1022219365/2774698696 1m07s
[vcs 2018-11-14T21:09:50.682Z] clone [==============>                            ] 1025786907/2774698696 1m09s
[vcs 2018-11-14T21:09:51.683Z] clone [==============>                            ] 1028794844/2774698696 1m10s
[vcs 2018-11-14T21:09:52.683Z] clone [===============>                           ] 1034819687/2774698696 1m11s
[vcs 2018-11-14T21:09:53.683Z] clone [===============>                           ] 1039912128/2774698696 1m12s
[vcs 2018-11-14T21:09:54.683Z] clone [===============>                           ] 1046252425/2774698696 1m13s
[vcs 2018-11-14T21:09:55.683Z] clone [===============>                           ] 1066134534/2774698696 1m13s
[vcs 2018-11-14T21:09:56.685Z] clone [===============>                           ] 1087894225/2774698696 1m12s
[vcs 2018-11-14T21:09:57.684Z] clone [================>                          ] 1107758509/2774698696 1m11s
[vcs 2018-11-14T21:09:58.684Z] clone [================>                          ] 1114750252/2774698696 1m12s
[vcs 2018-11-14T21:09:59.684Z] clone [================>                          ] 1129561806/2774698696 1m12s
[vcs 2018-11-14T21:10:00.684Z] clone [================>                          ] 1135341160/2774698696 1m13s
[vcs 2018-11-14T21:10:01.684Z] clone [================>                          ] 1144287548/2774698696 1m13s
[vcs 2018-11-14T21:10:02.684Z] clone [=================>                         ] 1170279456/2774698696 1m12s
[vcs 2018-11-14T21:10:03.685Z] clone [=================>                         ] 1192722867/2774698696 1m11s
[vcs 2018-11-14T21:10:04.685Z] clone [=================>                         ] 1214537175/2774698696 1m10s
[vcs 2018-11-14T21:10:05.685Z] clone [==================>                        ] 1229775369/2774698696 1m10s
[vcs 2018-11-14T21:10:06.685Z] clone [==================>                        ] 1248697180/2774698696 1m09s
[vcs 2018-11-14T21:10:07.862Z] clone [==================>                        ] 1269071662/2774698696 1m08s
[vcs 2018-11-14T21:10:08.862Z] clone [===================>                       ] 1296830077/2774698696 1m07s
[vcs 2018-11-14T21:10:09.862Z] clone [===================>                       ] 1321742345/2774698696 1m06s
[vcs 2018-11-14T21:10:10.862Z] clone [===================>                       ] 1346954223/2774698696 1m04s
[vcs 2018-11-14T21:10:11.862Z] clone [====================>                      ] 1367819568/2774698696 1m03s
[vcs 2018-11-14T21:10:12.864Z] clone [====================>                      ] 1391377778/2774698696 1m02s
[vcs 2018-11-14T21:10:13.865Z] clone [====================>                      ] 1416584059/2774698696 1m01s
[vcs 2018-11-14T21:10:14.868Z] clone [=====================>                     ] 1445335587/2774698696 1m00s
[vcs 2018-11-14T21:10:15.865Z] clone [=======================>                     ] 1513951972/2774698696 55s
[vcs 2018-11-14T21:10:16.865Z] clone [========================>                    ] 1562297481/2774698696 52s
[vcs 2018-11-14T21:10:17.970Z] clone [========================>                    ] 1599653315/2774698696 50s
[vcs 2018-11-14T21:10:18.971Z] clone [=========================>                   ] 1643817175/2774698696 47s
[vcs 2018-11-14T21:10:19.971Z] clone [==========================>                  ] 1675753258/2774698696 46s
[vcs 2018-11-14T21:10:20.971Z] clone [==========================>                  ] 1697761018/2774698696 45s
[vcs 2018-11-14T21:10:21.972Z] clone [==========================>                  ] 1716687932/2774698696 44s
[vcs 2018-11-14T21:10:22.972Z] clone [===========================>                 ] 1761680403/2774698696 42s
[vcs 2018-11-14T21:10:23.972Z] clone [===========================>                 ] 1763511023/2774698696 42s
[vcs 2018-11-14T21:10:24.972Z] clone [===========================>                 ] 1769106587/2774698696 43s
[vcs 2018-11-14T21:10:25.972Z] clone [===========================>                 ] 1773288870/2774698696 43s
[vcs 2018-11-14T21:10:26.972Z] clone [===========================>                 ] 1778806084/2774698696 43s
[vcs 2018-11-14T21:10:27.972Z] clone [===========================>                 ] 1780338054/2774698696 44s
[vcs 2018-11-14T21:10:28.972Z] clone [===========================>                 ] 1783985855/2774698696 44s
[vcs 2018-11-14T21:10:29.972Z] clone [===========================>                 ] 1788136760/2774698696 45s
[vcs 2018-11-14T21:10:30.972Z] clone [============================>                ] 1794430357/2774698696 45s
[vcs 2018-11-14T21:10:31.972Z] clone [============================>                ] 1800555329/2774698696 45s
[vcs 2018-11-14T21:10:32.972Z] clone [============================>                ] 1808119505/2774698696 45s
[vcs 2018-11-14T21:10:33.972Z] clone [============================>                ] 1820816366/2774698696 45s
[vcs 2018-11-14T21:10:34.973Z] clone [============================>                ] 1831494668/2774698696 45s
[vcs 2018-11-14T21:10:35.973Z] clone [============================>                ] 1836162975/2774698696 45s
[vcs 2018-11-14T21:10:36.973Z] clone [=============================>               ] 1854002346/2774698696 45s
[vcs 2018-11-14T21:10:37.973Z] clone [=============================>               ] 1860466166/2774698696 45s
[vcs 2018-11-14T21:10:38.973Z] clone [=============================>               ] 1877930700/2774698696 44s
[vcs 2018-11-14T21:10:39.973Z] clone [=============================>               ] 1883326687/2774698696 44s
[vcs 2018-11-14T21:10:40.973Z] clone [=============================>               ] 1899828059/2774698696 44s
[vcs 2018-11-14T21:10:41.973Z] clone [==============================>              ] 1913964212/2774698696 43s
[vcs 2018-11-14T21:10:42.973Z] clone [==============================>              ] 1933092528/2774698696 42s
[vcs 2018-11-14T21:10:43.973Z] clone [==============================>              ] 1953767204/2774698696 41s
[vcs 2018-11-14T21:10:44.973Z] clone [==============================>              ] 1971632105/2774698696 40s
[vcs 2018-11-14T21:10:45.974Z] clone [===============================>             ] 1987729693/2774698696 40s
[vcs 2018-11-14T21:10:46.974Z] clone [===============================>             ] 2012095873/2774698696 38s
[vcs 2018-11-14T21:10:47.974Z] clone [================================>            ] 2036880640/2774698696 37s
[vcs 2018-11-14T21:10:48.974Z] clone [================================>            ] 2063644564/2774698696 36s
[vcs 2018-11-14T21:10:49.974Z] clone [================================>            ] 2092201306/2774698696 34s
[vcs 2018-11-14T21:10:50.975Z] clone [=================================>           ] 2112958191/2774698696 33s
[vcs 2018-11-14T21:10:51.975Z] clone [=================================>           ] 2129736646/2774698696 32s
[vcs 2018-11-14T21:10:52.978Z] clone [==================================>          ] 2160844802/2774698696 30s
[vcs 2018-11-14T21:10:53.976Z] clone [==================================>          ] 2192312521/2774698696 29s
[vcs 2018-11-14T21:10:54.978Z] clone [===================================>         ] 2262137673/2774698696 24s
[vcs 2018-11-14T21:10:55.983Z] clone [=====================================>       ] 2371320649/2774698696 18s
[vcs 2018-11-14T21:10:56.979Z] clone [======================================>      ] 2460842825/2774698696 14s
[vcs 2018-11-14T21:10:57.982Z] clone [========================================>    ] 2562423625/2774698696 09s
[vcs 2018-11-14T21:10:58.983Z] clone [==========================================>  ] 2651822447/2774698696 05s
[vcs 2018-11-14T21:10:59.782Z] clone [===========================================> ] 2714343791/2774698696 03s
[vcs 2018-11-14T21:10:59.783Z]                                                                                 
[vcs 2018-11-14T21:10:59.783Z] transferred 2.58 GB in 110.2 seconds (24.0 MB/sec)
[vcs 2018-11-14T21:11:00.268Z] finished applying clone bundle
[vcs 2018-11-14T21:11:01.445Z] searching for changes
[vcs 2018-11-14T21:11:01.999Z] adding changesets
[vcs 2018-11-14T21:11:02.072Z] 
[vcs 2018-11-14T21:11:02.146Z] changesets [                                                          ]   1/314
[vcs 2018-11-14T21:11:02.146Z]                                                                                 
[vcs 2018-11-14T21:11:02.146Z] adding manifests
[vcs 2018-11-14T21:11:02.477Z] adding file changes
[vcs 2018-11-14T21:11:03.050Z] added 314 changesets with 1315 changes to 1067 files
[vcs 2018-11-14T21:11:44.403Z] new changesets 80b0b8b446fd:7585190c5954
[vcs 2018-11-14T21:11:44.999Z] searching for changes
[vcs 2018-11-14T21:11:45.095Z] no changes found
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark aurora
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark beta
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark central
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark esr10
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark esr17
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark esr24
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark esr31
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark esr38
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark esr45
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark esr52
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark esr60
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark fx-team
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark inbound
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark release
[vcs 2018-11-14T21:11:46.045Z] (pulling to obtain 6926e117b97cd120f5de0be2ab3bff7153f10a78)
[vcs 2018-11-14T21:11:48.984Z] searching for changes
[vcs 2018-11-14T21:11:50.797Z] 
[vcs 2018-11-14T21:11:52.672Z] searching [ <=>                                                             ] 2
[vcs 2018-11-14T21:11:54.295Z] searching [  <=>                                                            ] 3
[vcs 2018-11-14T21:11:59.781Z]                                                                                 
[vcs 2018-11-14T21:11:59.781Z] adding changesets
[vcs 2018-11-14T21:11:59.782Z] 
[vcs 2018-11-14T21:11:59.783Z] changesets [==============================>                               ] 1/2
[vcs 2018-11-14T21:11:59.783Z]                                                                                 
[vcs 2018-11-14T21:11:59.783Z] adding manifests
[vcs 2018-11-14T21:11:59.813Z] adding file changes
[vcs 2018-11-14T21:11:59.822Z] added 2 changesets with 4 changes to 4 files (+1 heads)
[vcs 2018-11-14T21:11:59.847Z] new changesets f8f2c4c13360:6926e117b97c
[vcs 2018-11-14T21:12:04.110Z] (warning: large working directory being used without fsmonitor enabled; enable fsmonitor to improve performance; see "hg help -e fsmonitor")
[vcs 2018-11-14T21:12:05.059Z] 
[vcs 2018-11-14T21:12:06.078Z] updating [                                                      ]    100/258996
[vcs 2018-11-14T21:12:07.117Z] updating [                                                ]   2800/258996 1m37s
[vcs 2018-11-14T21:12:08.121Z] updating [>                                               ]   5600/258996 1m35s
[vcs 2018-11-14T21:12:09.142Z] updating [>                                               ]   8200/258996 1m35s
[vcs 2018-11-14T21:12:10.203Z] updating [=>                                              ]  10900/258996 1m34s
[vcs 2018-11-14T21:12:11.257Z] updating [=>                                              ]  14000/258996 1m31s
[vcs 2018-11-14T21:12:12.333Z] updating [==>                                             ]  17400/258996 1m27s
[vcs 2018-11-14T21:12:13.384Z] updating [==>                                             ]  20400/258996 1m26s
[vcs 2018-11-14T21:12:14.422Z] updating [===>                                            ]  23300/258996 1m25s
[vcs 2018-11-14T21:12:15.448Z] updating [===>                                            ]  26900/258996 1m22s
[vcs 2018-11-14T21:12:16.453Z] updating [====>                                           ]  30300/258996 1m19s
[vcs 2018-11-14T21:12:17.455Z] updating [=====>                                          ]  33100/258996 1m18s
[vcs 2018-11-14T21:12:18.465Z] updating [=====>                                          ]  36500/258996 1m16s
[vcs 2018-11-14T21:12:19.477Z] updating [======>                                         ]  40400/258996 1m13s
[vcs 2018-11-14T21:12:20.573Z] updating [=======>                                        ]  43800/258996 1m11s
[vcs 2018-11-14T21:12:21.627Z] updating [=======>                                        ]  46900/258996 1m11s
[vcs 2018-11-14T21:12:22.674Z] updating [========>                                       ]  50000/258996 1m10s
[vcs 2018-11-14T21:12:23.714Z] updating [========>                                       ]  53200/258996 1m09s
[vcs 2018-11-14T21:12:24.744Z] updating [=========>                                      ]  56300/258996 1m08s
[vcs 2018-11-14T21:12:25.800Z] updating [==========>                                     ]  60000/258996 1m06s
[vcs 2018-11-14T21:12:26.826Z] updating [==========>                                     ]  63000/258996 1m05s
[vcs 2018-11-14T21:12:27.873Z] updating [===========>                                    ]  66300/258996 1m04s
[vcs 2018-11-14T21:12:28.880Z] updating [===========>                                    ]  69600/258996 1m03s
[vcs 2018-11-14T21:12:29.881Z] updating [============>                                   ]  72900/258996 1m01s
[vcs 2018-11-14T21:12:30.893Z] updating [=============>                                  ]  76000/258996 1m00s
[vcs 2018-11-14T21:12:31.893Z] updating [==============>                                   ]  79000/258996 59s
[vcs 2018-11-14T21:12:32.902Z] updating [==============>                                   ]  82000/258996 58s
[vcs 2018-11-14T21:12:33.905Z] updating [===============>                                  ]  85200/258996 57s
[vcs 2018-11-14T21:12:34.937Z] updating [================>                                 ]  88300/258996 56s
[vcs 2018-11-14T21:12:35.939Z] updating [================>                                 ]  91500/258996 55s
[vcs 2018-11-14T21:12:36.967Z] updating [=================>                                ]  94800/258996 54s
[vcs 2018-11-14T21:12:37.981Z] updating [=================>                                ]  97900/258996 53s
[vcs 2018-11-14T21:12:39.014Z] updating [==================>                               ] 101000/258996 52s
[vcs 2018-11-14T21:12:40.023Z] updating [===================>                              ] 104200/258996 51s
[vcs 2018-11-14T21:12:41.067Z] updating [===================>                              ] 106700/258996 50s
[vcs 2018-11-14T21:12:42.074Z] updating [====================>                             ] 110800/258996 49s
[vcs 2018-11-14T21:12:43.088Z] updating [=====================>                            ] 115100/258996 47s
[vcs 2018-11-14T21:12:44.116Z] updating [=====================>                            ] 118600/258996 46s
[vcs 2018-11-14T21:12:45.135Z] updating [======================>                           ] 122500/258996 44s
[vcs 2018-11-14T21:12:46.141Z] updating [=======================>                          ] 126200/258996 43s
[vcs 2018-11-14T21:12:47.212Z] updating [=======================>                          ] 129300/258996 42s
[vcs 2018-11-14T21:12:48.228Z] updating [========================>                         ] 132600/258996 41s
[vcs 2018-11-14T21:12:49.292Z] updating [=========================>                        ] 135400/258996 40s
[vcs 2018-11-14T21:12:50.321Z] updating [=========================>                        ] 138200/258996 39s
[vcs 2018-11-14T21:12:51.325Z] updating [==========================>                       ] 141200/258996 38s
[vcs 2018-11-14T21:12:52.339Z] updating [==========================>                       ] 142900/258996 38s
[vcs 2018-11-14T21:12:53.391Z] updating [===========================>                      ] 145200/258996 38s
[vcs 2018-11-14T21:12:54.399Z] updating [===========================>                      ] 148500/258996 36s
[vcs 2018-11-14T21:12:55.412Z] updating [============================>                     ] 152000/258996 35s
[vcs 2018-11-14T21:12:56.452Z] updating [=============================>                    ] 155400/258996 34s
[vcs 2018-11-14T21:12:57.630Z] updating [=============================>                    ] 158700/258996 33s
[vcs 2018-11-14T21:12:58.656Z] updating [==============================>                   ] 162200/258996 32s
[vcs 2018-11-14T21:12:59.702Z] updating [===============================>                  ] 166100/258996 30s
[vcs 2018-11-14T21:13:00.731Z] updating [===============================>                  ] 170000/258996 29s
[vcs 2018-11-14T21:13:01.744Z] updating [================================>                 ] 174200/258996 28s
[vcs 2018-11-14T21:13:02.750Z] updating [=================================>                ] 178200/258996 26s
[vcs 2018-11-14T21:13:03.766Z] updating [==================================>               ] 181900/258996 25s
[vcs 2018-11-14T21:13:04.774Z] updating [==================================>               ] 185600/258996 24s
[vcs 2018-11-14T21:13:05.779Z] updating [===================================>              ] 189700/258996 22s
[vcs 2018-11-14T21:13:06.803Z] updating [====================================>             ] 193900/258996 21s
[vcs 2018-11-14T21:13:07.840Z] updating [=====================================>            ] 197900/258996 20s
[vcs 2018-11-14T21:13:08.841Z] updating [=====================================>            ] 201600/258996 18s
[vcs 2018-11-14T21:13:09.873Z] updating [======================================>           ] 205700/258996 17s
[vcs 2018-11-14T21:13:10.896Z] updating [=======================================>          ] 209700/258996 16s
[vcs 2018-11-14T21:13:11.906Z] updating [========================================>         ] 213700/258996 14s
[vcs 2018-11-14T21:13:12.922Z] updating [========================================>         ] 217300/258996 13s
[vcs 2018-11-14T21:13:13.937Z] updating [=========================================>        ] 220500/258996 12s
[vcs 2018-11-14T21:13:14.954Z] updating [==========================================>       ] 224100/258996 11s
[vcs 2018-11-14T21:13:15.957Z] updating [==========================================>       ] 227900/258996 10s
[vcs 2018-11-14T21:13:17.039Z] updating [===========================================>      ] 231600/258996 09s
[vcs 2018-11-14T21:13:18.050Z] updating [============================================>     ] 235000/258996 08s
[vcs 2018-11-14T21:13:19.074Z] updating [=============================================>    ] 238600/258996 07s
[vcs 2018-11-14T21:13:20.102Z] updating [=============================================>    ] 242100/258996 06s
[vcs 2018-11-14T21:13:21.127Z] updating [==============================================>   ] 245800/258996 05s
[vcs 2018-11-14T21:13:22.140Z] updating [===============================================>  ] 249200/258996 03s
[vcs 2018-11-14T21:13:23.174Z] updating [===============================================>  ] 251400/258996 03s
[vcs 2018-11-14T21:13:24.259Z] updating [================================================> ] 254649/258996 02s
[vcs 2018-11-14T21:13:25.294Z] updating [================================================> ] 255698/258996 02s
[vcs 2018-11-14T21:13:26.512Z] updating [================================================> ] 256598/258996 01s
[vcs 2018-11-14T21:13:27.520Z] updating [================================================> ] 257547/258996 01s
[vcs 2018-11-14T21:13:27.979Z] updating [================================================> ] 258547/258996 01s
[vcs 2018-11-14T21:13:38.214Z]                                                                                 
[vcs 2018-11-14T21:13:38.214Z] 258996 files updated, 0 files merged, 0 files removed, 0 files unresolved
[vcs 2018-11-14T21:13:38.463Z] updated to 6926e117b97cd120f5de0be2ab3bff7153f10a78
[vcs 2018-11-14T21:13:38.469Z] PERFHERDER_DATA: {"framework": {"name": "vcs"}, "suites": [{"extraOptions": ["m3.xlarge"], "lowerIsBetter": true, "name": "clone", "shouldAlert": false, "subtests": [], "value": 156.62339401245117}, {"extraOptions": ["m3.xlarge"], "lowerIsBetter": true, "name": "pull", "shouldAlert": false, "subtests": [], "value": 13.032690048217773}, {"extraOptions": ["m3.xlarge"], "lowerIsBetter": true, "name": "update", "shouldAlert": false, "subtests": [], "value": 98.61538600921631}, {"extraOptions": ["m3.xlarge"], "lowerIsBetter": true, "name": "overall", "shouldAlert": false, "subtests": [], "value": 270.7935130596161}]}
[vcs 2018-11-14T21:13:38.917Z] TinderboxPrint:<a href=https://hg.mozilla.org/try/rev/6926e117b97cd120f5de0be2ab3bff7153f10a78 title='Built from try revision 6926e117b97cd120f5de0be2ab3bff7153f10a78'>6926e117b97cd120f5de0be2ab3bff7153f10a78</a>
[task 2018-11-14T21:13:38.917Z] executing ['bash', '-cx', 'cd /builds/worker/checkouts/gecko/ && cp -r /build/node_modules_eslint node_modules && ln -s ../tools/lint/eslint/eslint-plugin-mozilla node_modules && ln -s ../tools/lint/eslint/eslint-plugin-spidermonkey-js node_modules && ./mach lint -l eslint -f treeherder --quiet\n']
[task 2018-11-14T21:13:38.920Z] + cd /builds/worker/checkouts/gecko/
[task 2018-11-14T21:13:38.920Z] + cp -r /build/node_modules_eslint node_modules
[task 2018-11-14T21:13:40.120Z] + ln -s ../tools/lint/eslint/eslint-plugin-mozilla node_modules
[task 2018-11-14T21:13:40.123Z] + ln -s ../tools/lint/eslint/eslint-plugin-spidermonkey-js node_modules
[task 2018-11-14T21:13:40.124Z] + ./mach lint -l eslint -f treeherder --quiet
[task 2018-11-14T21:13:40.989Z] New python executable in /builds/worker/checkouts/gecko/obj-x86_64-pc-linux-gnu/_virtualenvs/init/bin/python2.7
[task 2018-11-14T21:13:40.990Z] Also creating executable in /builds/worker/checkouts/gecko/obj-x86_64-pc-linux-gnu/_virtualenvs/init/bin/python
[task 2018-11-14T21:13:42.910Z] Installing setuptools, pip, wheel...done.
[task 2018-11-14T21:13:44.179Z] running build_ext
[task 2018-11-14T21:13:44.179Z] building 'psutil._psutil_linux' extension
[task 2018-11-14T21:13:44.179Z] creating build
[task 2018-11-14T21:13:44.179Z] creating build/temp.linux-x86_64-2.7
[task 2018-11-14T21:13:44.179Z] creating build/temp.linux-x86_64-2.7/psutil
[task 2018-11-14T21:13:44.179Z] x86_64-linux-gnu-gcc -pthread -DNDEBUG -g -fwrapv -O2 -Wall -Wstrict-prototypes -fno-strict-aliasing -Wdate-time -D_FORTIFY_SOURCE=2 -g -fstack-protector-strong -Wformat -Werror=format-security -fPIC -DPSUTIL_POSIX=1 -DPSUTIL_VERSION=543 -DPSUTIL_LINUX=1 -I/usr/include/python2.7 -c psutil/_psutil_common.c -o build/temp.linux-x86_64-2.7/psutil/_psutil_common.o
[task 2018-11-14T21:13:44.179Z] x86_64-linux-gnu-gcc -pthread -DNDEBUG -g -fwrapv -O2 -Wall -Wstrict-prototypes -fno-strict-aliasing -Wdate-time -D_FORTIFY_SOURCE=2 -g -fstack-protector-strong -Wformat -Werror=format-security -fPIC -DPSUTIL_POSIX=1 -DPSUTIL_VERSION=543 -DPSUTIL_LINUX=1 -I/usr/include/python2.7 -c psutil/_psutil_posix.c -o build/temp.linux-x86_64-2.7/psutil/_psutil_posix.o
[task 2018-11-14T21:13:44.179Z] x86_64-linux-gnu-gcc -pthread -DNDEBUG -g -fwrapv -O2 -Wall -Wstrict-prototypes -fno-strict-aliasing -Wdate-time -D_FORTIFY_SOURCE=2 -g -fstack-protector-strong -Wformat -Werror=format-security -fPIC -DPSUTIL_POSIX=1 -DPSUTIL_VERSION=543 -DPSUTIL_LINUX=1 -I/usr/include/python2.7 -c psutil/_psutil_linux.c -o build/temp.linux-x86_64-2.7/psutil/_psutil_linux.o
[task 2018-11-14T21:13:44.179Z] creating build/lib.linux-x86_64-2.7
[task 2018-11-14T21:13:44.179Z] creating build/lib.linux-x86_64-2.7/psutil
[task 2018-11-14T21:13:44.179Z] x86_64-linux-gnu-gcc -pthread -shared -Wl,-O1 -Wl,-Bsymbolic-functions -Wl,-Bsymbolic-functions -Wl,-z,relro -fno-strict-aliasing -DNDEBUG -g -fwrapv -O2 -Wall -Wstrict-prototypes -Wdate-time -D_FORTIFY_SOURCE=2 -g -fstack-protector-strong -Wformat -Werror=format-security -Wl,-Bsymbolic-functions -Wl,-z,relro -Wdate-time -D_FORTIFY_SOURCE=2 -g -fstack-protector-strong -Wformat -Werror=format-security build/temp.linux-x86_64-2.7/psutil/_psutil_common.o build/temp.linux-x86_64-2.7/psutil/_psutil_posix.o build/temp.linux-x86_64-2.7/psutil/_psutil_linux.o -o build/lib.linux-x86_64-2.7/psutil/_psutil_linux.so
[task 2018-11-14T21:13:44.180Z] building 'psutil._psutil_posix' extension
[task 2018-11-14T21:13:44.180Z] x86_64-linux-gnu-gcc -pthread -DNDEBUG -g -fwrapv -O2 -Wall -Wstrict-prototypes -fno-strict-aliasing -Wdate-time -D_FORTIFY_SOURCE=2 -g -fstack-protector-strong -Wformat -Werror=format-security -fPIC -DPSUTIL_POSIX=1 -DPSUTIL_VERSION=543 -DPSUTIL_LINUX=1 -I/usr/include/python2.7 -c psutil/_psutil_common.c -o build/temp.linux-x86_64-2.7/psutil/_psutil_common.o
[task 2018-11-14T21:13:44.180Z] x86_64-linux-gnu-gcc -pthread -DNDEBUG -g -fwrapv -O2 -Wall -Wstrict-prototypes -fno-strict-aliasing -Wdate-time -D_FORTIFY_SOURCE=2 -g -fstack-protector-strong -Wformat -Werror=format-security -fPIC -DPSUTIL_POSIX=1 -DPSUTIL_VERSION=543 -DPSUTIL_LINUX=1 -I/usr/include/python2.7 -c psutil/_psutil_posix.c -o build/temp.linux-x86_64-2.7/psutil/_psutil_posix.o
[task 2018-11-14T21:13:44.180Z] x86_64-linux-gnu-gcc -pthread -shared -Wl,-O1 -Wl,-Bsymbolic-functions -Wl,-Bsymbolic-functions -Wl,-z,relro -fno-strict-aliasing -DNDEBUG -g -fwrapv -O2 -Wall -Wstrict-prototypes -Wdate-time -D_FORTIFY_SOURCE=2 -g -fstack-protector-strong -Wformat -Werror=format-security -Wl,-Bsymbolic-functions -Wl,-z,relro -Wdate-time -D_FORTIFY_SOURCE=2 -g -fstack-protector-strong -Wformat -Werror=format-security build/temp.linux-x86_64-2.7/psutil/_psutil_common.o build/temp.linux-x86_64-2.7/psutil/_psutil_posix.o -o build/lib.linux-x86_64-2.7/psutil/_psutil_posix.so
[task 2018-11-14T21:13:44.180Z] copying build/lib.linux-x86_64-2.7/psutil/_psutil_linux.so -> psutil
[task 2018-11-14T21:13:44.180Z] copying build/lib.linux-x86_64-2.7/psutil/_psutil_posix.so -> psutil
[task 2018-11-14T21:13:44.180Z] 
[task 2018-11-14T21:13:44.180Z] Error processing command. Ignoring because optional. (optional:packages.txt:comm/build/virtualenv_packages.txt)
[task 2018-11-14T21:19:41.952Z] No lint issues found.
[taskcluster 2018-11-14 21:19:42.433Z] === Task Finished ===
[taskcluster 2018-11-14 21:19:42.433Z] Successful task run with exit code: 0 completed in 669.981 seconds`,
    },
};
