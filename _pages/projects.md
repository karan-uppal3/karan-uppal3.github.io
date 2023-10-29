---
layout: archive
title: "Projects"
permalink: /projects/
author_profile: true
---

{% include base_path %}

<table border=0 class="bg_colour" style="padding:20px;width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
    <tbody>

        <tr>
            <td style="border:none;padding:10px;width:25%;vertical-align:middle">
                <div class="one">
                    <img src='https://karan-uppal3.github.io/images/deforestation.PNG' width="120">
                </div>
            </td>
            <td style="border:none;padding:10px;width:75%;vertical-align:top">
                <papertitle><big>Predicting Deforestation in the Brazilian Amazon at high-resolution</big></papertitle>
                <p><a href="https://gee-tool.projects.earthengine.app/view/dssg23-deforestation" target="_blank">[tool]</a> <a href="https://drive.google.com/file/d/1f6jUsnEBBWSOp5WNMRAfuSQk0RacOxcY/view?usp=sharing" target="_blank">[poster]</a> <a href="https://docs.google.com/presentation/d/1b7YdPsgSrhMhCnZxQSDQZeLYrVWOFbIb/edit?usp=sharing&ouid=117531076092303608501&rtpof=true&sd=true" target="_blank">[slides]</a></p>
                <p>The goal was to build predictive models to accurately forecast and assess the likelihood of deforestation in various regions of the Brazilian Amazon biome which was achivied using semantic segmentation models on high resolution geographic data. We also identified drivers of deforestation in the predicted regions through a novel interpretability pipeline and built a visualisation tool for ease of analysis and policy making.</p>
            </td>
        </tr>

        <tr>
            <td style="border:none;padding:10px;width:25%;vertical-align:middle">
                <div class="one">
                    <img src='https://karan-uppal3.github.io/images/gaze.gif' width="120">
                </div>
            </td>
            <td style="border:none;padding:10px;width:75%;vertical-align:top">
                <papertitle><big>Neural Network Models for Evaluating Attention in Dynamic Visual Scenes</big></papertitle>
                <p>
                <em>Accepted at <a href="https://gaze-meets-ml.github.io/gaze_ml_2022/" target="_blank">Gaze Meets ML Workshop NeurIPS 2022</a></em> <a href="https://arxiv.org/abs/2211.10966" target="_blank">[paper]</a> <a href="https://github.com/karan-uppal3/decoding-attention" target="_blank">[code]</a>
                </p>
                <p>In this project, our aim was to construct a deep neural network to assist in evaluating human attention. Given a video and (x, y)-coordinates of a person's gaze at certain timesteps, the task is to predict the object the person is visually attending to. We modeled the person's gaze as a fixation density map which can be understood as a spatially localised feature importance map to weigh the feature map from a CNN.</p>
            </td>
        </tr> 

        <tr>
            <td style="border:none;padding:10px;width:25%;vertical-align:middle">
                <div class="one">
                    <img src='https://karan-uppal3.github.io/images/BANA.png' width="120">
                </div>
            </td>
            <td style="border:none;padding:10px;width:75%;vertical-align:top">
                <papertitle><big>[RE] Background-Aware Pooling and Noise-Aware Loss for Weakly-Supervised Semantic Segmentation</big></papertitle>
                <p>
                <em>Published at <a href="http://rescience.github.io/" target="_blank">ReScience C Journal</a></em> <a href="https://zenodo.org/record/6574677/files/article.pdf" target="_blank">[paper]</a> <a href="https://github.com/karan-uppal3/BANA" target="_blank">[code]</a>
                </p>
                <p>
                Undertaken as part of the 
                <a href="https://paperswithcode.com/rc2021">Machine Learning Reproducibility Challenge 2021</a>
                , we reviewed the above-accepted CVPR 2021 publication for its reproducibility and verification of its empirical claims.
                Our major contributions include implementing Noise-Aware Loss from scratch, achieving state-of-the-art results on the PASCAL VOC 2012 dataset and
                extending the methodology for inference on unseen classes for the task of instance segmentation. 
                </p>
            </td>
        </tr> 

        <tr>
            <td style="border:none;padding:10px;width:25%;vertical-align:middle">
                <div class="one">
                    <img src='https://karan-uppal3.github.io/images/EM.png' width="120">
                </div>
            </td>
            <td style="border:none;padding:10px;width:75%;vertical-align:top">
                <papertitle><big>Semi-supervised Instance Segmentation for EM Connectomics</papertitle></big></papertitle>
                <p><em>Manuscript under progess.</em> <a href="https://github.com/zudi-lin/pytorch_connectomics" target="_blank">[code]</a> </p>
                <p>
                    We experimented with different variants of the UNet 3D model for the task of instance segmentation on brain volumes for synaptic cleft detection on the CREMI dataset.
                    Utilising semi-supervised learning, we were able to boost the model accuracy and achieve the first 4 positions on the 
                    <a href="https://cremi.org/leaderboard/">CREMI leaderboard</a>.
                </p>
            </td>
        </tr> 

        <tr>
            <td style="border:none;padding:10px;width:25%;vertical-align:middle">
                <div class="one">
                    <img src='https://karan-uppal3.github.io/images/FDA.png' width="120">
                </div>
            </td>
            <td style="border:none;padding:10px;width:75%;vertical-align:top">
                <papertitle><big>Review of “FDA: Fourier Domain Adaptation for Semantic Segmentation”</papertitle></big>
                <p><a href="https://openreview.net/pdf?id=MBIIiRE0EXv" target="_blank">[report]</a> <a href="https://github.com/thefatbandit/FDA">[code]</a></p>
                <p>
                    Undertaken as part of the
                    <a href="https://paperswithcode.com/rc2020">Machine Learning Reproducibility Challenge 2020</a>
                    , we reviewed the above-accepted CVPR 2020 publication for its reproducibility and verification of its claims through computational experiments.
                    Our major contribution include optimising the pseudo-label generation process, reducing computational load by over 50% making it possible to be run even on Google Colaboratory.
                </p>
            </td>
        </tr> 

        <tr>
            <td style="border:none;padding:10px;width:25%;vertical-align:middle">
                <div class="one">
                    <img src='https://karan-uppal3.github.io/images/GA.png' width="120">
                </div>
            </td>
            <td style="border:none;padding:10px;width:75%;vertical-align:top">
                <papertitle><big>Comparing Evolutionary Methods in a Continuous Control Problem</big></papertitle>
                <p><a href="https://drive.google.com/file/d/1xBshrJlnfLJn7N8ijvmAf7JgVDdEsZ00/view?usp=sharing" target="_blank">[report]</a> <a href="https://github.com/Nishantgoyal918/GA_TERM_Project" target="_blank">[code]</a></p>
                <p>
                    Undertaken as a term project under the guidance of
                    <a href="https://scholar.google.co.kr/citations?user=RONBrJ0AAAAJ&hl=en">Prof. Nirupam Chakraborti</a>
                    , we compared different evolutionary methods to train neural networks to solve the problem of controlling a Bipedal Walker.
                    We also developed a parallel processing pipeline to aid the training as well as hyperparameter tuning of these models.
                </p>
            </td>
        </tr> 

        <tr>
            <td style="border:none;padding:10px;width:25%;vertical-align:middle">
                <div class="one">
                    <img src='https://karan-uppal3.github.io/images/SegD.png' width="120">
                </div>
            </td>
            <td style="border:none;padding:10px;width:75%;vertical-align:top">
                <papertitle><big>Segmentation based Decision Trees for Interpretable Image Classification</big></papertitle>
                <p><a href="https://drive.google.com/file/d/1ahdEq4VCWuA-Vse1ZKyY-Fxv8nQ6D5FG/view?usp=sharing" target="_blank">[report]</a> <a href="https://github.com/karan-uppal3/Interpret-Classifier" target="_blank">[code]</a></p>
                <p>
                    We created an image classification pipeline utilizing a combination of decision-tree model and semantic segmentation models to help explain the inference. 
                    Originally trained to identify bicycles, it also exhibited zero-shot learning for identifying images of unicycles.
                </p>
            </td>
        </tr> 

    </tbody>
</table>