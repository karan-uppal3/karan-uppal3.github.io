---
layout: archive
title: "Projects"
permalink: /projects/
author_profile: true
---

{% include base_path %}


<table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;"><tbody>

    <tr onmouseout="mpi_stop()" onmouseover="mpi_start()">
        <td style="border:none;padding:20px;width:25%;vertical-align:middle">
            <div class="one">
                <div class="two" id="mpi_image">
                    <video width=100% height=100% muted autoplay loop>
                    <source src="https://karan-uppal3.github.io/images/MPI_vid.mp4" type="video/mp4">
                    Your browser does not support the video tag
                    </video></div>
                <img src='https://karan-uppal3.github.io/images/MPI_img.gif' width="160">
            </div>
            <script type="text/javascript">
                function mpi_start() {
                    document.getElementById('mpi_image').style.opacity = "1";
                }

                function mpi_stop() {
                    document.getElementById('mpi_image').style.opacity = "0";
                }
                mpi_stop()
            </script>
        </td>
        <td style="border:none;padding:20px;width:75%;vertical-align:top">
            <papertitle><big>Neural Network Models for Evaluating Attention in Dynamic Visual Scenes</papertitle></big>
            <br>
            <p><a href="https://docs.google.com/document/d/1sbWVFM_NsMU1nLFFxe_uAN9D3NfhO-31R7mTx_IntqI/edit" target="_blank">[report]</a></p>
            <p>
                In this project, our aim was to construct a deep neural network to assist in evaluating human attention. Given a video and (x, y)-coordinates of a person's gaze at certain timesteps, the task is to predict the object the person is visually attending to.
                We modeled the person's gaze as a fixation density map which can be understood as a spatially localised feature importance map to weigh the feature map from a CNN. 
            </p>
        </td>
    </tr>

    <tr onmouseout="bana_stop()" onmouseover="bana_start()">
        <td style="border:none;padding:20px;width:25%;vertical-align:middle">
            <div class="one">
                <div class="two" id="bana_image">
                <img src='https://karan-uppal3.github.io/images/BANA_2.png' width="160">
                </div>
                <img src="https://karan-uppal3.github.io/images/BANA_1.jpg" width="160">
            </div>
            <script type="text/javascript">
                function bana_start() {
                    document.getElementById('bana_image').style.opacity = "1";
                }
                function bana_stop() {
                    document.getElementById('bana_image').style.opacity = "0";
                }
                bana_stop()
            </script>
        </td>
        <td style="border:none;padding:20px;width:75%;vertical-align:top">
            <papertitle><big>[RE] Background-Aware Pooling and Noise-Aware Loss for Weakly-Supervised Semantic Segmentation</papertitle></big>
            <br>
            <p>
            <em>Published at <a href="http://rescience.github.io/" target="_blank">ReScience C Journal</a></em> <a href="https://zenodo.org/record/6574677/files/article.pdf" target="_blank">[paper]</a> <a href="https://github.com/karan-uppal3/BANA" target="_blank">[code]</a>
            <p>
                Undertaken as part of the 
                <a href="https://paperswithcode.com/rc2021">Machine Learning Reproducibility Challenge 2021</a>
                , we reviewed the above-accepted CVPR 2021 publication for its reproducibility and verification of its empirical claims.
                Our major contributions include implementing Noise-Aware Loss from scratch, achieving state-of-the-art results on the PASCAL VOC 2012 dataset and
                extending the methodology for inference on unseen classes for the task of instance segmentation.                                
            </p>
        </td>
    </tr>

    <tr onmouseout="em_stop()" onmouseover="em_start()">
        <td style="border:none;padding:20px;width:25%;vertical-align:middle">
            <div class="one">
                <div class="two" id="em_image">
                <img src='https://karan-uppal3.github.io/images/EM_2.png' width="160">
                </div>
                <img src="https://karan-uppal3.github.io/images/EM_1.png" width="160">
            </div>
            <script type="text/javascript">
                function em_start() {
                    document.getElementById('em_image').style.opacity = "1";
                }
                function em_stop() {
                    document.getElementById('em_image').style.opacity = "0";
                }
                em_stop()
            </script>
        </td>
        <td style="border:none;padding:20px;width:75%;vertical-align:top">
            <papertitle><big>Semi-supervised Instance Segmentation for EM Connectomics</papertitle></big>
            <br>
            <p><em>Manuscript under progess.</em> <a href="https://github.com/zudi-lin/pytorch_connectomics" target="_blank">[code]</a> </p>
            <p>
                We experimented with different variants of the UNet 3D model for the task of instance segmentation on brain volumes for synaptic cleft detection on the CREMI dataset.
                Utilising semi-supervised learning, we were able to boost the model accuracy and achieving the first 4 positions on the 
                <a href="https://cremi.org/leaderboard/">CREMI leaderboard</a>.
            </p>
        </td>
    </tr>

    <tr onmouseout="fda_stop()" onmouseover="fda_start()">
        <td style="border:none;padding:20px;width:25%;vertical-align:middle">
            <div class="one">
                <div class="two" id="fda_image">
                <img src='https://karan-uppal3.github.io/images/FDA_2.png' width="160">
                </div>
                <img src="https://karan-uppal3.github.io/images/FDA_1.png" width="160">
            </div>
            <script type="text/javascript">
                function fda_start() {
                    document.getElementById('fda_image').style.opacity = "1";
                }
                function fda_stop() {
                    document.getElementById('fda_image').style.opacity = "0";
                }
                fda_stop()
            </script>
        </td>
        <td style="border:none;padding:20px;width:75%;vertical-align:top">
            <papertitle><big>Review of “FDA: Fourier Domain Adaptation for Semantic Segmentation”</papertitle></big>
            <br>
            <p><a href="https://openreview.net/pdf?id=MBIIiRE0EXv" target="_blank">[report]</a> <a href="https://github.com/thefatbandit/FDA">[code]</a></p>
            <p>
                Undertaken as part of the
                <a href="https://paperswithcode.com/rc2020">Machine Learning Reproducibility Challenge 2020</a>
                , we reviewed the above-accepted CVPR 2020 publication for its reproducibility and verification of its claims through computational experiments.
                Our major contribution include optimising the pseudo-label generation process, reducing computational load by over 50% making it possible to be run even on Google Colaboratory.
            </p>
        </td>
    </tr>

    <tr onmouseout="ga_stop()" onmouseover="ga_start()">
        <td style="border:none;padding:20px;width:25%;vertical-align:middle">
            <div class="one">
                <div class="two" id="ga_image">
                    <video width=100% height=100% muted autoplay loop>
                    <source src="https://karan-uppal3.github.io/images/GA_vid.mp4" type="video/mp4">
                    Your browser does not support the video tag
                    </video></div>
                <img src='https://karan-uppal3.github.io/images/GA_Project.png' width="160">
            </div>
            <script type="text/javascript">
                function ga_start() {
                    document.getElementById('ga_image').style.opacity = "1";
                }

                function ga_stop() {
                    document.getElementById('ga_image').style.opacity = "0";
                }

                ga_stop()
            </script>
        </td>
        <td style="border:none;padding:20px;width:75%;vertical-align:top">
            <papertitle><big>Comparing Evolutionary Methods in a Continuous Control Problem</big></papertitle>
            <br>
            <p><a href="https://drive.google.com/file/d/1xBshrJlnfLJn7N8ijvmAf7JgVDdEsZ00/view?usp=sharing" target="_blank">[report]</a> <a href="https://github.com/Nishantgoyal918/GA_TERM_Project" target="_blank">[code]</a></p>
            <p>
                Undertaken as a term project under the guidance of
                <a href="https://scholar.google.co.kr/citations?user=RONBrJ0AAAAJ&hl=en">Prof. Nirupam Chakraborti</a>
                , we compared different evolutionary methods to train neural networks to solve the problem of controlling a Bipedal Walker.
                We also developed a parallel processing pipeline to aid the training as well as hyperparameter tuning of these models.
            </p>
        </td>
    </tr> 

    <tr onmouseout="segd_stop()" onmouseover="segd_start()">
        <td style="border:none;padding:20px;width:25%;vertical-align:middle">
            <div class="one">
                <div class="two" id="segd_image">
                <img src='https://karan-uppal3.github.io/images/SegD_2.png' width="160">
                </div>
                <img src="https://karan-uppal3.github.io/images/SegD_1.png" width="160">
            </div>
            <script type="text/javascript">
                function segd_start() {
                    document.getElementById('segd_image').style.opacity = "1";
                }
                function segd_stop() {
                    document.getElementById('segd_image').style.opacity = "0";
                }
                segd_stop()
            </script>
        </td>
        <td style="border:none;padding:20px;width:75%;vertical-align:top">
            <papertitle><big>Segmentation based Decision Trees for Interpretable Image Classification</big></papertitle>
            <br>
            <p><a href="https://drive.google.com/file/d/1ahdEq4VCWuA-Vse1ZKyY-Fxv8nQ6D5FG/view?usp=sharing" target="_blank">[report]</a> <a href="https://github.com/karan-uppal3/Interpret-Classifier" target="_blank">[code]</a></p>
            <p>
                We created an image classification pipeline utilizing a combination of decision-tree model and semantic segmentation models to help explain the inference. 
                Originally trained to identify bicycles, it also exhibited zero-shot learning for identifying images of unicycles.
            </p>
        </td>
    </tr>
    
</tbody></table>